package pl.wrona.clinic.service.report;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Data
@Service
@AllArgsConstructor
public class ReportService {

    private final SurveyRepository surveyRepository;

    @Transactional
    public String getReportById(int reportId) {
        return surveyRepository.findById((long) reportId)
                .map(Survey::getSurvey)
                .orElse(null);
    }

}
