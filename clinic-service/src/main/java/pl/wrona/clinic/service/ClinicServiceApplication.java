package pl.wrona.clinic.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
public class ClinicServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClinicServiceApplication.class, args);
    }

}
