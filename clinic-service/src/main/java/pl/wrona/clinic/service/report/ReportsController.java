package pl.wrona.clinic.service.report;

import lombok.AllArgsConstructor;
import org.openapitools.api.ReportsApi;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class ReportsController implements ReportsApi {

    private final ReportService reportService;

    @Override
    public ResponseEntity<String> getReportById(Integer reportId) {
        return ResponseEntity.ok(reportService.getReportById(reportId));
    }
}
