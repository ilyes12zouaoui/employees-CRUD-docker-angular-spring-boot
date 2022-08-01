package ilyes.de.employee.service;

import ilyes.de.employee.resource.to.EmployeeTO;
import ilyes.de.employee.respository.EmployeeRepository;
import ilyes.de.employee.respository.entity.EmployeeEntity;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@SpringBootTest
class EmployeeServiceTest {
    @MockBean
    EmployeeRepository employeeRepository;
    @Autowired
    EmployeeService employeeService;

    @Test
    void create() {
        EmployeeTO expectedEmployeeTO = new EmployeeTO(1L, "testName", "test@gmail.com",
                25, "male", true);
        EmployeeEntity expectedEmployeeEntity = new EmployeeEntity(1L, "testName", "test@gmail.com",
                25, "male", true);
        when(employeeRepository.save(any())).thenAnswer(invocation -> invocation.getArgument(0));
        ArgumentCaptor<EmployeeEntity> employeeEntityArgumentCaptor = ArgumentCaptor.forClass(EmployeeEntity.class);

        EmployeeTO response= employeeService.create(expectedEmployeeTO);

        assertThat(response).usingRecursiveComparison()
                .isEqualTo(expectedEmployeeTO);
        verify(employeeRepository).save(employeeEntityArgumentCaptor.capture());
        assertThat(employeeEntityArgumentCaptor.getValue()).usingRecursiveComparison()
                .isEqualTo(expectedEmployeeEntity);
    }

    @Test
    void getById() {
        EmployeeTO expectedEmployeeTO = new EmployeeTO(1L, "testName", "test@gmail.com",
                25, "male", true);
        EmployeeEntity expectedEmployeeEntity = new EmployeeEntity(1L, "testName", "test@gmail.com",
                25, "male", true);
        when(employeeRepository.findById(anyLong())).thenReturn(Optional.of(expectedEmployeeEntity));
        ArgumentCaptor<Long> employeeEntityArgumentCaptor = ArgumentCaptor.forClass(Long.class);
        EmployeeTO response=  employeeService.getById(1L);

        assertThat(response).usingRecursiveComparison()
                .isEqualTo(expectedEmployeeTO);
        verify(employeeRepository).findById(employeeEntityArgumentCaptor.capture());
        assertThat(employeeEntityArgumentCaptor.getValue()).isEqualTo(1L);
    }


}