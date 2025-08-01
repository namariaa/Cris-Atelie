package com.cris.cris_atelie_back.infrastructure.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    @Autowired
    SecurityFilter securityFilter;

    @Autowired
    CorsFilter corsFilter;


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
        return httpSecurity.csrf(csrf -> csrf.disable()).sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .headers(headers -> headers.frameOptions(frameOptions -> frameOptions.sameOrigin()))
        .authorizeHttpRequests(authorize -> authorize
        .requestMatchers("/v3/api-docs/**", "/swagger-ui/**", "/auth/login", "/auth/cadastro", "/h2-console/**").permitAll().requestMatchers(HttpMethod.GET,  "/produto", "/produto/all", "/produto/*").permitAll()
        .requestMatchers(HttpMethod.POST, "/produto").permitAll()
        .requestMatchers(HttpMethod.PUT,"/produto/**").hasRole("ADM")
        .requestMatchers(HttpMethod.PATCH,"/produto/**").hasRole("ADM")
        .requestMatchers(HttpMethod.DELETE,"/produto/**").hasRole("ADM")
				.anyRequest()
				.authenticated()).addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class).addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class).build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception{
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
