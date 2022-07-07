package pl.wrona.clinic.service.profile;

import lombok.AllArgsConstructor;
import org.openapitools.model.ProfileResponse;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ProfileService {

    public ProfileResponse getUserInfo() {
        return new ProfileResponse()
                .name("Przemysław")
                .surname("Wrona")
                .pwz("54328080");
    }
}
