package pl.wrona.clinic.service.registration

import org.openapitools.model.UserRegistrationRequest
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import pl.wrona.clinic.service.entity.AppUser
import pl.wrona.clinic.service.entity.UserRepository
import spock.lang.Specification

@SpringBootTest
@ActiveProfiles("test")
class RegistrationServiceTest extends Specification {

    @Autowired
    private RegistrationService registrationService

    @Autowired
    private UserRepository userRepository;

    def "should register user"() {
        given:
        UserRegistrationRequest user = new UserRegistrationRequest()
                .name(NAME)
                .surname(SURNAME)
                .email(EMAIL)
                .password(PASSWORD)

        when:
        registrationService.register(user)

        then:
        AppUser appUser = userRepository.findByUsernameOrEmail(EMAIL, EMAIL)

        appUser.name == NAME
        appUser.surname == SURNAME
        appUser.email == EMAIL

        where:
        NAME  | SURNAME    | EMAIL                   | PASSWORD
        "Jan" | "Kowalski" | "jankowaslki@clinic.pl" | "password"
    }
}
