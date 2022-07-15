package pl.wrona.clinic.service.role;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.wrona.clinic.service.entity.Role;
import pl.wrona.clinic.service.entity.RoleRepository;
import pl.wrona.clinic.service.entity.RoleType;

import java.util.List;

@Service
@AllArgsConstructor
public class RoleService {

    private final RoleRepository roleRepository;

    public List<Role> findDefaultListOfRoles() {
        return roleRepository.findAllByIdIn(List.of(RoleType.USER));
    }
}
