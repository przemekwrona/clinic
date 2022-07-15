package pl.wrona.clinic.service.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Role {

    @Id
    @Enumerated(EnumType.STRING)
    private RoleType id;

    private String name;

    private String description;

    @ManyToMany(mappedBy = "roles")
    private List<User> users;
}
