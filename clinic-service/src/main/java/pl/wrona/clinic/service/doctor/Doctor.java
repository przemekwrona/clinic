package pl.wrona.clinic.service.doctor;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Data;
import pl.wrona.clinic.service.entity.AppUser;
import pl.wrona.clinic.service.examination.MedicalExamination;

@Data
@Entity
public class Doctor extends AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "doctor")
    private List<MedicalExamination> medicalExaminations;

}
