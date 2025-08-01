package com.cris.cris_atelie_back.infrastructure.entitys;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.cris.cris_atelie_back.infrastructure.entitys.bases.UserRole;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name="usuario")
@Entity(name="usuario")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Usuario implements UserDetails{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name="login")
    public String login;
    @Column(name="papel")
    public UserRole papel;
    @Column(name="senha")
    public String senha;
    @Column(name="nome")
    public String nome;

    public Usuario(String login, String nome, UserRole papel, String senha){
        this.login = login;
        this.nome = nome;
        this.papel = papel;
        this.senha = senha;
    }
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
       if (this.papel == UserRole.ADM){
        return List.of(new SimpleGrantedAuthority("ROLE_ADM"), new SimpleGrantedAuthority("ROLE_USER"));
       }
       else return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }
    @Override
    public String getPassword() {
        return this.senha;
    }
    @Override
    public String getUsername() {
        return this.login;
    }


}