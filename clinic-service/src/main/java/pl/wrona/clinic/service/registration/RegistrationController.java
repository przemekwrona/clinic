package pl.wrona.clinic.service.registration;

import lombok.AllArgsConstructor;
import org.openapitools.api.RegisterApi;
import org.openapitools.model.UserRegistrationRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class RegistrationController implements RegisterApi {

    private final RegistrationService registrationService;

    @Override
    public ResponseEntity<Void> register(UserRegistrationRequest userRegistrationRequest) {
        registrationService.register(userRegistrationRequest);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
