package pl.wrona.clinic.service.auth;

import java.time.Clock;
import java.time.Instant;
import java.util.Date;
import java.util.concurrent.TimeUnit;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties("security.jwt")
public class SecurityProperties {

    private String appName;
    private String secret;
    private long expirationInMinutes;

    public long getExpirationInMilliseconds() {
        return TimeUnit.MINUTES.toMillis(expirationInMinutes);
    }

    public Instant getExpirationInstant(Clock clock) {
        return Instant.now(clock).plusMillis(getExpirationInMilliseconds());
    }

    public Date getExpirationDate(Clock clock) {
        return new Date(getExpirationInstant(clock).toEpochMilli());
    }

}
