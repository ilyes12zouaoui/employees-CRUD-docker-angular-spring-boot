package ilyes.de.employee.respository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ilyes.de.employee.respository.entity.EmployeeEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity,Long> {
	Optional<EmployeeEntity> getByEmailIgnoreCase(String email);
}
