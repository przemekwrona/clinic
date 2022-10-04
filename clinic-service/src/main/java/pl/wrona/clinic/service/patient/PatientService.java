package pl.wrona.clinic.service.patient;

import lombok.AllArgsConstructor;
import org.openapitools.model.CreatePatientRequest;
import org.springframework.stereotype.Service;
import pl.wrona.clinic.service.report.Survey;
import pl.wrona.clinic.service.report.SurveyRepository;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PatientService {

    private final PatientRepository patientRepository;
    private final SurveyRepository surveyRepository;

    public Long createPatient(CreatePatientRequest createPatientRequest) {
        Patient patient = new Patient();
        patient.setName(createPatientRequest.getName());
        patient.setSurname(createPatientRequest.getSurname());
        patient.setCode(createPatientRequest.getCode());

        Patient savedPatient = patientRepository.save(patient);
        return savedPatient.getId();
    }

    @Transactional
    public List<CreatePatientRequest> getPatients() {
        return patientRepository.findAll().stream()
                .map(patient -> new CreatePatientRequest()
                        .id(BigDecimal.valueOf(patient.getId()))
                        .name(patient.getName())
                        .surname(patient.getSurname())
                        .code(patient.getCode())
                        .surveys(patient.getSurveys().stream()
                                .map(survey -> new org.openapitools.model.Survey()
                                        .id(BigDecimal.valueOf(survey.getId()))
                                        .surveyType(survey.getSurveyType())
                                        .createDate(survey.getCreateDate().atOffset(ZoneOffset.UTC)))
                                .collect(Collectors.toList())))
                .collect(Collectors.toList());
    }

    public CreatePatientRequest getPatient(String code) {
        Patient patient = patientRepository.findByCode(code);
        return new CreatePatientRequest()
                .id(BigDecimal.valueOf(patient.getId()))
                .name(patient.getName())
                .surname(patient.getSurname())
                .code(patient.getCode())
                .surveys(patient.getSurveys().stream()
                        .map(survey -> new org.openapitools.model.Survey()
                                .surveyType(survey.getSurveyType())
                                .id(BigDecimal.valueOf(survey.getId()))
                                .createDate(survey.getCreateDate().atOffset(ZoneOffset.UTC)))
                        .collect(Collectors.toList()));
    }

    @Transactional
    public void assignReport(String code, org.openapitools.model.Report model) {
        Patient patient = patientRepository.findByCode(code);

        Survey survey = new Survey();
        survey.setPatientId(patient.getId());
        survey.setSurveyType(model.getReportType());
        survey.setSurvey(model.getReport());
        survey.setCreateDate(LocalDateTime.now());

        surveyRepository.save(survey);
    }
}
