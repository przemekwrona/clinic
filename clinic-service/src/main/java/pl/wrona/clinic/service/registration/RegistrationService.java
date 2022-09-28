package pl.wrona.clinic.service.registration;

import lombok.AllArgsConstructor;
import org.openapitools.model.UserRegistrationRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.wrona.clinic.service.entity.AppRole;
import pl.wrona.clinic.service.entity.AppUser;
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
    public void register(UserRegistrationRequest userRegistrationRequest) {

        AppUser user = userRegistrationFactory.apply(userRegistrationRequest);
        user.setRoles(roleService.findDefaultListOfRoles());
        user.setPassword(userRegistrationRequest.getPassword());

        userRepository.save(user);
    }
}
