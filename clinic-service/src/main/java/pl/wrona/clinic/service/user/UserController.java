package pl.wrona.clinic.service.user;

import lombok.AllArgsConstructor;
import org.openapitools.api.UsersApi;
import org.openapitools.model.Summary;
import org.openapitools.model.UserRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class UserController implements UsersApi {

    private final UserService userService;
    private final UserSummaryService userSummaryService;

    @Override
    public ResponseEntity<Void> updateUser(UserRequest userRequest) {
        userService.updateUser(userRequest);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @Override
    public ResponseEntity<Summary> getSummary() {
        return ResponseEntity.ok(userSummaryService.getSummary());
    }
}
