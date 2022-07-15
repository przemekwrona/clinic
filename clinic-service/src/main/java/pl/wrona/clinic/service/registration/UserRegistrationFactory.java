package pl.wrona.clinic.service.registration;

import org.openapitools.model.UserRegistrationRequest;
import org.springframework.stereotype.Component;
import pl.wrona.clinic.service.entity.User;

import java.util.function.Function;

@Component
public class UserRegistrationFactory implements Function<UserRegistrationRequest, User> {

    @Override
    public User apply(UserRegistrationRequest user) {
        return User.builder()
                .name(user.getName())
                .surname(user.getSurname())
                .username(user.getEmail())
                .email(user.getEmail())
                .build();
    }
}
