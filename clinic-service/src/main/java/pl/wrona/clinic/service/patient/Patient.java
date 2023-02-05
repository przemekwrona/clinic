package pl.wrona.clinic.service.patient;

import lombok.Data;
import pl.wrona.clinic.service.entity.AppUser;
import pl.wrona.clinic.service.examination.MedicalExamination;
import pl.wrona.clinic.service.report.Survey;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Patient extends AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String surname;
    private String code;

    @OneToMany(mappedBy = "patient")
    private List<Survey> surveys;

    @OneToMany(mappedBy = "patient")
    private List<MedicalExamination> medicalExaminations;
}
