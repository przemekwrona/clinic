package pl.wrona.clinic.service.user;

import lombok.AllArgsConstructor;
import org.openapitools.model.UserRequest;
import org.springframework.stereotype.Service;
import pl.wrona.clinic.service.entity.UserRepository;

import javax.transaction.Transactional;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    @Transactional
    public void updateUser(UserRequest userRequest) {
        userRepository.findById(1L).ifPresent(user -> {
            user.setName(userRequest.getName());
            user.setSurname(userRequest.getSurname());

            userRepository.save(user);
        });
    }

}
