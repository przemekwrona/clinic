package pl.wrona.clinic.service.report;

import java.io.Serializable;
import java.time.LocalDateTime;

public class ReportId implements Serializable {

    private String patientId;
    private LocalDateTime createDate;
}
