//medium.com/swlh/spring-boot-security-jwt-hello-world-example-b479e457664c

package hha.spring.data.dataapi.security;


import hha.spring.data.dataapi.domain.Role;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * Utilties to mange Token
 */

@Component
public class JwtUtil implements Serializable {

    private final String ROLE_KEY = "roles";

    private JwtParser parser;

    private String secretKey;

    private long tokenValidity;

    @Autowired
    public JwtUtil(@Value("secret-key-for-encryption") String secretKey,
                   //5 hours -> milliseconds (1000*60*60*5)
                   @Value("18000000") long tokenValidity) {
        this.secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
        this.tokenValidity = tokenValidity;
    }

    public String createToken(String username, List<Role> roles) {
        Claims claims = Jwts.claims().setSubject(username);
        claims.put(ROLE_KEY, roles.stream().map(role -> new SimpleGrantedAuthority(role.getAuthority()))
                        .filter(Objects::nonNull)
                        .collect(Collectors.toList()));

        Date now = new Date();
        Date expiresAt = new Date(now.getTime() + tokenValidity);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiresAt)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    public boolean isValidToken(String token) {
        try {
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    public String getUsername(String token) {
        return Jwts.parser().setSigningKey(secretKey)
                .parseClaimsJws(token).getBody().getSubject();
    }

    public List<GrantedAuthority> getRoles(String token) {
        List<Map<String, String>> roleClaims = Jwts.parser().setSigningKey(secretKey)
                .parseClaimsJws(token).getBody().get(ROLE_KEY, List.class);

        return roleClaims.stream().map(roleClaim ->
                new SimpleGrantedAuthority(roleClaim.get("authority")))
                .collect(Collectors.toList());
    }

}
