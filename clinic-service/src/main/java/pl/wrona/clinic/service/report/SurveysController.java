package pl.wrona.clinic.service.report;

import lombok.AllArgsConstructor;
import org.openapitools.api.ReportsApi;
import org.openapitools.model.Report;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class SurveysController implements ReportsApi {

    private final SurveyService surveyService;

    @Override
    public ResponseEntity<String> getReportById(Integer reportId) {
        return ResponseEntity.ok(surveyService.getSurveyById(reportId));
    }
}
