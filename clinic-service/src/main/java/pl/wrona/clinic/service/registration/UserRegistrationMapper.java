package pl.wrona.clinic.service.registration;

import org.openapitools.model.UserRegistrationRequest;
import org.springframework.stereotype.Component;
import pl.wrona.clinic.service.entity.AppUser;

import java.util.function.Function;

@Component
public class UserRegistrationMapper implements Function<UserRegistrationRequest, AppUser> {

    @Override
    public AppUser apply(UserRegistrationRequest user) {
        return AppUser.builder()
                .name(user.getName())
                .surname(user.getSurname())
                .username(user.getEmail())
                .email(user.getEmail())
                .build();
    }
}
