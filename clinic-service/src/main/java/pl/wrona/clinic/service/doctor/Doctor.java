package pl.wrona.clinic.service.doctor;

import java.util.List;
import javax.persistence.*;

import lombok.Data;
import pl.wrona.clinic.service.entity.AppUser;
import pl.wrona.clinic.service.examination.MedicalExamination;
import pl.wrona.clinic.service.patient.Patient;

@Data
@Entity
@PrimaryKeyJoinColumn(name = "app_user_id")
public class Doctor extends AppUser {

    @OneToMany(mappedBy = "doctor")
    private List<MedicalExamination> medicalExaminations;

    @OneToMany(mappedBy = "doctor")
    private List<Patient> patients;

}
