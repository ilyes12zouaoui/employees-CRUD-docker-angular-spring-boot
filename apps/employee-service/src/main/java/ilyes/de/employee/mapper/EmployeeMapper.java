package ilyes.de.employee.mapper;

import ilyes.de.employee.resource.to.EmployeeTO;
import ilyes.de.employee.respository.entity.EmployeeEntity;

public class EmployeeMapper {

	public static EmployeeEntity toEmployeeEntity(EmployeeTO employeeTo) {
		EmployeeEntity employeeEntity = new EmployeeEntity(employeeTo.getId(), employeeTo.getName(), employeeTo.getEmail(),
				employeeTo.getAge(), employeeTo.getGender(), employeeTo.isDoesSport());
		return employeeEntity;
	}
	
	public static EmployeeTO toEmployeeTO(EmployeeEntity employeeEntity) {
		EmployeeTO employeeTo = new EmployeeTO(employeeEntity.getId(), employeeEntity.getName(), employeeEntity.getEmail(),
				employeeEntity.getAge(), employeeEntity.getGender(), employeeEntity.isDoesSport());
		return employeeTo;
	}
}
