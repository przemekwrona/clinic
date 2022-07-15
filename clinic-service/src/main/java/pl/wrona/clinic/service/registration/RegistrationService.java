package pl.wrona.clinic.service.registration;

import lombok.AllArgsConstructor;
import org.openapitools.api.RegisterApi;
import org.openapitools.model.UserRegistrationRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.wrona.clinic.service.entity.Role;
import pl.wrona.clinic.service.entity.User;
import pl.wrona.clinic.service.entity.UserRepository;
import pl.wrona.clinic.service.role.RoleService;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final UserRepository userRepository;
    private final RoleService roleService;

    private final UserRegistrationFactory userRegistrationFactory;

    @Transactional
    public ResponseEntity<Void> register(UserRegistrationRequest userRegistrationRequest) {

        User user = userRegistrationFactory.apply(userRegistrationRequest);
        List<Role> defaultRoles = roleService.findDefaultListOfRoles();

        user.setRoles(defaultRoles);

        userRepository.save(userRegistrationFactory.apply(userRegistrationRequest));

        return null;
    }
}
