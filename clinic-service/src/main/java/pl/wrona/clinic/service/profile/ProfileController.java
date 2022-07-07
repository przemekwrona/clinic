package pl.wrona.clinic.service.profile;

import lombok.AllArgsConstructor;
import org.openapitools.api.ProfilesApi;
import org.openapitools.model.ProfileResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class ProfileController implements ProfilesApi {

    private final ProfileService profileService;

    @Override
    public ResponseEntity<ProfileResponse> getUserInfo() {
        return ResponseEntity.ok(profileService.getUserInfo());
    }
}
