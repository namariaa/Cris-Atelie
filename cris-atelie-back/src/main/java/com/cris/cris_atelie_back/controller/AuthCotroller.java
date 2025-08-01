package com.cris.cris_atelie_back.controller;

import org.apache.catalina.connector.Response;
import org.aspectj.apache.bcel.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cris.cris_atelie_back.bussiness.TokenService;
import com.cris.cris_atelie_back.controller.DTO.AuthenticationDTO;
import com.cris.cris_atelie_back.controller.DTO.CadastroDTO;
import com.cris.cris_atelie_back.controller.DTO.LoginDTO;
import com.cris.cris_atelie_back.infrastructure.entitys.Usuario;
import com.cris.cris_atelie_back.infrastructure.repository.IUsuario;

import jakarta.validation.Valid;

@RestController
@RequestMapping("auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthCotroller {
    @Autowired
    private AuthenticationManager authenticationManager; 

    @Autowired
    private IUsuario repository;

    @Autowired 
    TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data){
        var senha = new UsernamePasswordAuthenticationToken(data.login(), data.senha());
        var auth = this.authenticationManager.authenticate(senha);
        var token = tokenService.generateToken((Usuario) auth.getPrincipal());
        return ResponseEntity.ok(new LoginDTO(token));
    }

    @PostMapping("/cadastro")
    public ResponseEntity cadasteo(@RequestBody @Valid CadastroDTO data){
        if (this.repository.findByLogin(data.login()) != null) return ResponseEntity.badRequest().build();
        String senha = new BCryptPasswordEncoder().encode(data.senha());
        Usuario user = new Usuario(data.login(), data.nome(), data.papel(), senha);
        this.repository.save(user);
        return ResponseEntity.ok().build();
    }
}
