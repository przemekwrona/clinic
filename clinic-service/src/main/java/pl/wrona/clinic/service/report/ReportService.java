package pl.wrona.clinic.service.report;

import lombok.AllArgsConstructor;
import org.openapitools.model.CreateReportRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class ReportService {

    private final ReportRepository reportRepository;

    @Transactional
    public void createReport(CreateReportRequest createReportRequest) {
        Report report = new Report();
        report.setReportType("MAA");
        report.setPatientId("123");
        report.setCreateDate(LocalDateTime.now());
        report.setReport("asdasdasdad");

        reportRepository.save(report);
    }
}
