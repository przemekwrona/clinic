package pl.wrona.clinic.service.user;

import lombok.AllArgsConstructor;
import org.openapitools.model.Summary;
import org.springframework.stereotype.Service;
import pl.wrona.clinic.service.patient.PatientRepository;
import pl.wrona.clinic.service.report.SurveyRepository;

@Service
@AllArgsConstructor
public class UserSummaryService {

    private final SurveyRepository surveyRepository;
    private final PatientRepository patientRepository;

    public Summary getSummary() {
        return new Summary()
                .numberOfPatients(patientRepository.count())
                .numberOfReports(surveyRepository.count());
    }
}
