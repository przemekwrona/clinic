package pl.wrona.clinic.service.auth;

import lombok.AllArgsConstructor;
import org.openapitools.model.AuthRequest;
import org.openapitools.model.AuthResponse;
import org.springframework.stereotype.Service;
import pl.wrona.clinic.service.entity.User;
import pl.wrona.clinic.service.entity.UserRepository;

@Service
@AllArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    public AuthResponse login(AuthRequest authRequest) {

        User user = userRepository.findByUsernameOrEmail(authRequest.getName(), authRequest.getName());

        return new AuthResponse()
                .name(user.getName())
                .surname(user.getSurname());
    }
}
