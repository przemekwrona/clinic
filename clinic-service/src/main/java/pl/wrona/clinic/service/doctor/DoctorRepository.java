package pl.wrona.clinic.service.doctor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    Doctor findByEmail(String email);

    @Modifying
    @Query(value = "insert into doctor(app_user_id) values (:doctorId)", nativeQuery = true)
    void insertDoctorId(@Param("doctorId") Long doctorId);
}
