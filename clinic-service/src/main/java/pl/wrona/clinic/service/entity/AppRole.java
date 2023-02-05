package pl.wrona.clinic.service.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;

@Data
@Entity
public class AppRole implements GrantedAuthority {

    @Id
    @Enumerated(EnumType.STRING)
    private RoleType id;

    private String name;

    private String description;

    @ManyToMany(mappedBy = "roles")
    private List<AppUser> appUsers;

    @Override
    public String getAuthority() {
        return name;
    }
}
