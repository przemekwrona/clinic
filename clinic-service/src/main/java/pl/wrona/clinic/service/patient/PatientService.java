package pl.wrona.clinic.service.patient;

import lombok.AllArgsConstructor;
import org.openapitools.model.CreatePatientRequest;
import org.openapitools.model.CreatePatientResponse;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PatientService {

    private final PatientRepository patientRepository;

    public Long createPatient(CreatePatientRequest createPatientRequest) {
        Patient patient = new Patient();
        patient.setName(createPatientRequest.getName());
        patient.setSurname(createPatientRequest.getSurname());
        patient.setCode(createPatientRequest.getCode());

        Patient savedPatient = patientRepository.save(patient);
        return savedPatient.getId();
    }

    public List<CreatePatientRequest> getPatients() {
        return patientRepository.findAll().stream()
                .map(patient -> new CreatePatientRequest()
                        .id(BigDecimal.valueOf(patient.getId()))
                        .name(patient.getName())
                        .surname(patient.getSurname())
                        .code(patient.getCode())
                        .surveys(List.of()))
                .collect(Collectors.toList());
    }
}
