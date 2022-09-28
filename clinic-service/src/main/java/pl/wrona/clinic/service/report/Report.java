package pl.wrona.clinic.service.report;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.time.LocalDateTime;
@Data
@Entity
@IdClass(ReportId.class)
public class Report {

    @Id
    private String patientId;

    @Id
    private LocalDateTime createDate;

    private String reportType;
    private String report;

}
