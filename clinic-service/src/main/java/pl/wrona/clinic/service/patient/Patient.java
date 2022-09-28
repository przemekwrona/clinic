package pl.wrona.clinic.service.patient;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String surname;
    private String code;
}
