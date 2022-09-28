package pl.wrona.clinic.service.patient;

import lombok.AllArgsConstructor;
import org.openapitools.api.PatientsApi;
import org.openapitools.model.CreatePatientRequest;
import org.openapitools.model.CreatePatientResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
@AllArgsConstructor
public class PatientController implements PatientsApi {

    private final PatientService patientService;

    @Override
    public ResponseEntity<CreatePatientResponse> createPatients(CreatePatientRequest createPatientRequest) {
        Long patientId = patientService.createPatient(createPatientRequest);
        return ResponseEntity.ok(new CreatePatientResponse().patientId(BigDecimal.valueOf(patientId)));
    }

    @Override
    public ResponseEntity<List<CreatePatientRequest>> getPatients() {
        return ResponseEntity.ok(patientService.getPatients());
    }
}
