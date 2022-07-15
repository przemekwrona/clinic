package pl.wrona.clinic.service.auth;

import lombok.AllArgsConstructor;
import org.openapitools.api.LoginApi;
import org.openapitools.model.AuthRequest;
import org.openapitools.model.AuthResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class AuthController implements LoginApi {

    private final AuthService authService;

    @Override
    public ResponseEntity<AuthResponse> login(AuthRequest authRequest) {
        return ResponseEntity.ok(authService.login(authRequest));
    }
}
