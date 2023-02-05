package pl.wrona.clinic.service.registration;

import lombok.AllArgsConstructor;
import org.openapitools.model.UserRegistrationRequest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import pl.wrona.clinic.service.entity.AppUser;
import pl.wrona.clinic.service.entity.UserRepository;
import pl.wrona.clinic.service.role.RoleService;

import javax.transaction.Transactional;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final UserRepository userRepository;
    private final RoleService roleService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final UserRegistrationMapper userRegistrationFactory;

    @Transactional
    public void register(UserRegistrationRequest userRegistrationRequest) {

        AppUser user = userRegistrationFactory.apply(userRegistrationRequest);
        user.setRoles(roleService.findDefaultListOfRoles());

        user.setPassword(bCryptPasswordEncoder.encode(userRegistrationRequest.getPassword()));

        userRepository.save(user);
    }
}
