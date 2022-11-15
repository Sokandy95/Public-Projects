package developer.andy.RecipeBook.models;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

public class UserLogin {
	
	@NotEmpty(message = "Please enter your email.")
	@Email(message = "Please enter a valid email address.")
	private String email;
	
	@NotNull(message = "Please enter your password")
	@Size(min = 8, max = 20, message = "Password must be between 8-20 characters long!")
	private String password;
	
	public UserLogin() {}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
