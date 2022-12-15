package developer.andy.RecipeBook.repositories;

import org.springframework.data.repository.CrudRepository;

import developer.andy.RecipeBook.models.User;


public interface UserRepository extends CrudRepository<User, Long> {
	public User findByEmail (String email);
	public User findByUsername (String username);
}
