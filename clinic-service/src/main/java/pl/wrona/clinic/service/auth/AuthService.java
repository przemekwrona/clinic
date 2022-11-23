package pl.wrona.clinic.service.auth;

import java.util.Optional;
import lombok.AllArgsConstructor;
import org.openapitools.model.AuthRequest;
import org.openapitools.model.AuthResponse;
import org.springframework.stereotype.Service;
import pl.wrona.clinic.service.entity.UserRepository;

@Service
@AllArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    public AuthResponse login(AuthRequest authRequest) {
        return Optional.ofNullable(userRepository.findByUsernameOrEmail(authRequest.getName(), authRequest.getName()))
                .map(user -> new AuthResponse()
                        .name(user.getName())
                        .surname(user.getSurname()))
                .orElse(new AuthResponse());
    }
}
