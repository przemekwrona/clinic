package pl.wrona.clinic.service.auth;

import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.openapitools.model.AuthRequest;
import org.openapitools.model.AuthResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;
import pl.wrona.clinic.service.entity.AppUser;

import javax.transaction.Transactional;

@Service
@AllArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JsonWebTokenUtils jsonWebTokenUtils;
    private final SecurityUserDetailsService securityUserDetailsService;

    public AuthResponse login(AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

        final AppUser appUser = (AppUser) securityUserDetailsService.loadUserByUsername(authRequest.getEmail());

        return new AuthResponse()
                .name(appUser.getUsername())
                .surname(appUser.getSurname())
                .roles(appUser.getAuthorities().stream()
                        .map(GrantedAuthority::getAuthority)
                        .collect(Collectors.toList()))
                .token(jsonWebTokenUtils.generateToken(authentication.getName()));
    }

}
