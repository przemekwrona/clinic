package pl.wrona.clinic.service.auth;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.security.Key;
import java.time.Clock;
import java.time.Instant;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.Date;

@Slf4j
@Component
@RequiredArgsConstructor
public class JsonWebTokenUtils {

    private final Clock clock;
    private final SecurityProperties securityProperties;

    static final String AUDIENCE_UNKNOWN = "unknown";
    static final String AUDIENCE_WEB = "web";
    static final String AUDIENCE_MOBILE = "mobile";
    static final String AUDIENCE_TABLET = "tablet";

    private SignatureAlgorithm SIGNATURE_ALGORITHM = SignatureAlgorithm.HS512;

    public String getUsernameFromToken(String token) {
        return getAllClaimsFromToken(token).getSubject();
    }

    public Date getIssuedAtDateFromToken(String token) {
        return getAllClaimsFromToken(token).getIssuedAt();
    }

    public String getAudienceFromToken(String token) {
        return getAllClaimsFromToken(token).getAudience();
    }

    public String refreshToken(String token) {
        final Claims claims = this.getAllClaimsFromToken(token);

        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(securityProperties.getSecret());
        Key signingKey = new SecretKeySpec(apiKeySecretBytes, SIGNATURE_ALGORITHM.getJcaName());

        return Jwts.builder()
                .setIssuer(claims.getIssuer())
                .setSubject(claims.getSubject())
                .setAudience(claims.getAudience())
                .setIssuedAt(new Date(Instant.now(clock).toEpochMilli()))
                .setExpiration(securityProperties.getExpirationDate(clock))
                .signWith(signingKey, SIGNATURE_ALGORITHM)
                .compact();
    }

    public String generateToken(String username) {
        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(securityProperties.getSecret());
        Key signingKey = new SecretKeySpec(apiKeySecretBytes, SIGNATURE_ALGORITHM.getJcaName());

        return Jwts.builder()
                .setIssuer(securityProperties.getAppName())
                .setSubject(username)
                .setAudience(AUDIENCE_WEB)
                .setIssuedAt(new Date(Instant.now(clock).toEpochMilli()))
                .setExpiration(securityProperties.getExpirationDate(clock))
                .signWith(signingKey, SIGNATURE_ALGORITHM)
                .compact();
    }

    private Claims getAllClaimsFromToken(String token) {
        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(securityProperties.getSecret());
        Key signingKey = new SecretKeySpec(apiKeySecretBytes, SIGNATURE_ALGORITHM.getJcaName());

        return Jwts.parserBuilder()
                .setSigningKey(signingKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public Boolean validateToken(String token) {
        final String username = getUsernameFromToken(token);
        final Date created = getIssuedAtDateFromToken(token);
        return username != null;
    }

}
