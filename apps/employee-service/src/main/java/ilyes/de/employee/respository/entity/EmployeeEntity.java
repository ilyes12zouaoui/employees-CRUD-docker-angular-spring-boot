package ilyes.de.employee.respository.entity;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Table(name = "employees")
@Entity
@EntityListeners(AuditingEntityListener.class)
public class EmployeeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "employees_id_sequence")
    @SequenceGenerator(name = "employees_id_sequence", allocationSize = 1)
    private Long id;

    private String name;
    
    private String email;

    private Integer age;
    
    private String gender;
    
    private boolean doesSport;
    
	public EmployeeEntity() {
		super();
	}

	public EmployeeEntity(Long id, String name, String email, Integer age, String gender, boolean doesSport) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.age = age;
		this.gender = gender;
		this.doesSport = doesSport;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public boolean isDoesSport() {
		return doesSport;
	}

	public void setDoesSport(boolean doesSport) {
		this.doesSport = doesSport;
	}

	@Override
	public String toString() {
		return "EmployeeEntity [id=" + id + ", name=" + name + ", email=" + email + ", age=" + age + ", doesSport="
				+ doesSport + "]";
	}	
    
}
