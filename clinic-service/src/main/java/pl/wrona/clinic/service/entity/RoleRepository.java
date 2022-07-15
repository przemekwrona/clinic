package pl.wrona.clinic.service.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface RoleRepository extends JpaRepository<Role, RoleType> {

    List<Role> findAllByIdIn(Collection<RoleType> id);
}
