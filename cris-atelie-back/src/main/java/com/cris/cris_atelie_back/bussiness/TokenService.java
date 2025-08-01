package com.cris.cris_atelie_back.bussiness;

import java.time.LocalDateTime;
import java.time.ZoneOffset;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.cris.cris_atelie_back.infrastructure.entitys.Usuario;

@Service
public class TokenService {
    @Value("${api.security.token.secret}") //Pega a senha da variável de ambiente
    private String secret;
    
    
    public String generateToken(Usuario user){ //Pois vou retornar um token depois de fazer verificações necessárias
        try{
            Algorithm algorithm = Algorithm.HMAC256(secret);
            String token = JWT.create().withIssuer("user").withSubject(user.getLogin()).withExpiresAt(LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"))).sign(algorithm);
            return token;
        }catch(JWTCreationException e){
            throw new RuntimeException("Deu erro para gerar token", e);
        }
    }

    public String validateToken(String token){
        try{
            Algorithm algorithm = Algorithm.HMAC256(secret);
            return JWT.require(algorithm).withIssuer("user").build().verify(token).getSubject();
        }catch(JWTVerificationException e){
            return "";
        }
    }
}
