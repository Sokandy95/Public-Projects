package developer.andy.RecipeBook.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@Order(2) //order of security chain
public class UserSecurityConfig {
	@Bean
	public SecurityFilterChain filterChain2(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/").permitAll();
		
		http.antMatcher("/user/**")
		.authorizeRequests().anyRequest().hasAuthority("USER")
		.and()
		.formLogin()
			.loginPage("/user/login")
			.usernameParameter("email")
			.loginProcessingUrl("/user/login")
			.defaultSuccessUrl("/user/home")
			.permitAll()
		.and()
			.logout().logoutUrl("/user/logout")
			.logoutSuccessUrl("/");
		
		return http.build();
	}
}