package ilyes.de.employee.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import ilyes.de.employee.mapper.EmployeeMapper;
import ilyes.de.employee.resource.to.EmployeeTO;
import ilyes.de.employee.respository.EmployeeRepository;

@Service
public class EmployeeService {

	private EmployeeRepository employeeRepository;
	
	public EmployeeService(EmployeeRepository employeeRepository) {
		this.employeeRepository = employeeRepository;
	}
	
	   public void verifyExistenceById(Long id){
		   employeeRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("no employee was find for id " + id));
	    }
	   
	   public boolean isEmailExisting(String email){
		   return employeeRepository.getByEmailIgnoreCase(email).isPresent();          
	    }

	    public void remove(Long id) {
	        verifyExistenceById(id);
	        employeeRepository.deleteById(id);
	    }

	    public EmployeeTO create(EmployeeTO productTO) {
	        return EmployeeMapper.toEmployeeTO(employeeRepository.save(EmployeeMapper.toEmployeeEntity(productTO)));
	    }

	    public EmployeeTO update(EmployeeTO productTO) {
	        verifyExistenceById(productTO.getId());
	        return EmployeeMapper.toEmployeeTO(employeeRepository.save(EmployeeMapper.toEmployeeEntity(productTO)));
	    }

	    public EmployeeTO getById(Long id) {
	        return EmployeeMapper
	                .toEmployeeTO(
	                		employeeRepository.findById(id)
	                                .orElseThrow(() -> new RuntimeException("no employee was find for id " + id))
	                );
	    }

	    public List<EmployeeTO> getAll() {
	        return employeeRepository.findAll().stream().map(EmployeeMapper::toEmployeeTO).collect(Collectors.toList());
	    }
	
}
