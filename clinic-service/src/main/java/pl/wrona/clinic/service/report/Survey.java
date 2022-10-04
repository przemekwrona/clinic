package pl.wrona.clinic.service.report;

import lombok.Data;
import pl.wrona.clinic.service.patient.Patient;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long patientId;
    private LocalDateTime createDate;
    private String surveyType;
    private String survey;

    @ManyToOne(optional = false)
    @JoinColumn(name = "patientId", referencedColumnName = "id", insertable = false, updatable = false)
    private Patient patient;

}
