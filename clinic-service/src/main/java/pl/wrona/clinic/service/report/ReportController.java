package pl.wrona.clinic.service.report;

import lombok.AllArgsConstructor;
import org.openapitools.api.ReportApi;
import org.openapitools.model.CreateReportRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class ReportController implements ReportApi {

    private final ReportService reportService;

    @Override
    public ResponseEntity<Void> createReport(CreateReportRequest createReportRequest) {
        reportService.createReport(createReportRequest);
        return ResponseEntity.ok(null);
    }
}
