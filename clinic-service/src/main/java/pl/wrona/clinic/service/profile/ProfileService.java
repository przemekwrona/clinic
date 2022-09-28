package pl.wrona.clinic.service.profile;

import lombok.AllArgsConstructor;
import org.openapitools.model.ProfileResponse;
import org.springframework.stereotype.Service;
import pl.wrona.clinic.service.entity.AppUser;
import pl.wrona.clinic.service.entity.UserRepository;

import javax.transaction.Transactional;

@Service
@AllArgsConstructor
public class ProfileService {

    private final UserRepository userRepository;

    @Transactional
    public ProfileResponse getUserInfo() {
        return userRepository.findById(1L).map(appUser -> new ProfileResponse()
                        .name(appUser.getName())
                        .surname(appUser.getSurname())
                        .pwz("54328080"))
                .orElse(new ProfileResponse());
    }
}
