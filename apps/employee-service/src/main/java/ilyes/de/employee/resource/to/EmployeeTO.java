package ilyes.de.employee.resource.to;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmployeeTO {

	@JsonProperty("id")
    private Long id;

	@JsonProperty("name")
    private String name;
    
	@JsonProperty("email")
    private String email;

	@JsonProperty("age")
    private Integer age;

	@JsonProperty("gender")
    private String gender;
	
	@JsonProperty("doesSport")
    private boolean doesSport;
	
	

	public EmployeeTO(Long id, String name, String email, Integer age, String gender, boolean doesSport) {
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

	
	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
