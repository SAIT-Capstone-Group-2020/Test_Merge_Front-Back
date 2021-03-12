package hha.spring.data.dataapi.repository;

import hha.spring.data.dataapi.domain.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//need to check the meaning of this annotation
@RepositoryRestResource
public interface UserRepository extends JpaRepository<Users, Integer> {

    Users findByEmail(String username);

    @Query(value= "SELECT * FROM user WHERE uuid = ?1", nativeQuery = true)
    Users findByUuid(String uuid);
}
