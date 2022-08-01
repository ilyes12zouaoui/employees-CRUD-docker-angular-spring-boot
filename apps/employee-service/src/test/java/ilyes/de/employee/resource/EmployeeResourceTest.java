package ilyes.de.employee.resource;

import ilyes.de.employee.resource.to.EmployeeTO;
import ilyes.de.employee.respository.EmployeeRepository;
import ilyes.de.employee.respository.entity.EmployeeEntity;
import org.assertj.core.api.AssertionsForClassTypes;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.MockMvc;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class EmployeeResourceTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Test
    @Sql("classpath:clean-up.sql")
    void create() throws Exception {
        EmployeeTO expectedEmployeeTO = new EmployeeTO(1L, "testName", "test@gmail.com",
                25, "male", true);

        //when
        var response = mockMvc.perform(
                        post("/api/v1/employees")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(objectMapper.writeValueAsString(expectedEmployeeTO))
                )
                .andExpect(status().isOk())
                .andReturn();
        var employeeResponseTO = objectMapper.readValue(response.getResponse().getContentAsString(), EmployeeTO.class);

        assertThat(employeeResponseTO).usingRecursiveComparison().ignoringFields("id").isEqualTo(expectedEmployeeTO);
    }

    @Test
    @Sql("classpath:clean-up.sql")
    void getOne() throws Exception {
        createEmployees();
        EmployeeTO expectedEmployeeTO = getSecondEmployeeTo();

        //when
        var response = mockMvc.perform(
                        get("/api/v1/employees/{id}",2)
                                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
        var employeeResponseTO = objectMapper.readValue(response.getResponse().getContentAsString(), EmployeeTO.class);

        assertThat(employeeResponseTO).usingRecursiveComparison().isEqualTo(expectedEmployeeTO);
    }

    @Test
    @Sql("classpath:clean-up.sql")
    void deleteEmployee() throws Exception {
        createEmployees();

        //when
        mockMvc.perform(
                        delete("/api/v1/employees/{id}",2)
                                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        assertThat(employeeRepository.findAll()).hasSize(2).doesNotContain(getSecondEmployeeEntity());

    }

    private EmployeeTO getSecondEmployeeTo(){
        return new EmployeeTO(2L, "testName2", "test2@gmail.com",
                30, "male", false);
    }
    private EmployeeEntity getSecondEmployeeEntity(){
        return new EmployeeEntity(2L, "testName2", "test2@gmail.com",
                30, "male", false);
    }

    private void createEmployees(){
        EmployeeEntity e1 = new EmployeeEntity(1L, "testName1", "test1@gmail.com",
                25, "male", true);
        EmployeeEntity e2 = new EmployeeEntity(2L, "testName2", "test2@gmail.com",
                30, "male", false);
        EmployeeEntity e3 = new EmployeeEntity(3L, "testName3", "test3@gmail.com",
                27, "female", false);
        employeeRepository.saveAndFlush(e1);
        employeeRepository.saveAndFlush(e2);
        employeeRepository.saveAndFlush(e3);

    }
}