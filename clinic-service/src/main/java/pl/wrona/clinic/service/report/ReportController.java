package pl.wrona.clinic.service.report;

import lombok.AllArgsConstructor;
import org.openapitools.api.ReportApi;
import org.openapitools.api.ReportsApi;
import org.openapitools.model.CreateReportRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.NativeWebRequest;

import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class ReportController implements ReportApi {

    private final ReportService reportService;

    @Override
    public ResponseEntity<Void> createReport(CreateReportRequest createReportRequest) {
        return ResponseEntity.ok(null);
    }
}
