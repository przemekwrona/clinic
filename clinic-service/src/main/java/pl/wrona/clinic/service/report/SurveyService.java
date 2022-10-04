package pl.wrona.clinic.service.report;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.openapitools.model.Report;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Data
@Service
@AllArgsConstructor
public class SurveyService {

    private final SurveyRepository surveyRepository;

    @Transactional
    public String getSurveyById(int reportId) {
        return surveyRepository.findById((long) reportId)
                .map(Survey::getSurvey)
                .orElse(null);
    }

}
