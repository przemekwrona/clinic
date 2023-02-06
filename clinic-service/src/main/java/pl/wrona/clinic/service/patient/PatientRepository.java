package pl.wrona.clinic.service.patient;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.wrona.clinic.service.doctor.Doctor;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

    Patient findByCode(String code);

    List<Patient> findAllByDoctor(Doctor doctor);

}
