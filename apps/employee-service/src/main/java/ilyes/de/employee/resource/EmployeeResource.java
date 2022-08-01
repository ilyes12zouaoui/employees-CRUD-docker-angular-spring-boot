package ilyes.de.employee.resource;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import ilyes.de.employee.resource.to.EmployeeTO;
import ilyes.de.employee.service.EmployeeService;

@RestController
@RequestMapping("/api/v1/employees")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class EmployeeResource {

 	  private EmployeeService employeeService;

	   public EmployeeResource(EmployeeService employeeService) {
		   this.employeeService = employeeService;
	   }
	    @PostMapping("")
	    public EmployeeTO create(@RequestBody EmployeeTO productTO){
	        return employeeService.create(productTO);
	    }

	    @PutMapping("")
	    public EmployeeTO update(@RequestBody EmployeeTO productTO){
	        return employeeService.update(productTO);
	    }
	    
	    @GetMapping("/email/{email}")
	    public boolean isEmailExisting(@PathVariable String email){
	       return employeeService.isEmailExisting(email);
	    }

	    @DeleteMapping("/{id}")
	    public void delete(@PathVariable Long id){
	    	employeeService.remove(id);
	    }

	    @GetMapping("/{id}")
	    public EmployeeTO getOne(@PathVariable Long id){
	       return employeeService.getById(id);
	    }

	    @GetMapping("")
	    public List<EmployeeTO> getPage(){
	       return employeeService.getAll();
	    }

}
