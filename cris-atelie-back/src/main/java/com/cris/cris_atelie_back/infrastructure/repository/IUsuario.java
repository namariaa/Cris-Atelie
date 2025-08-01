package com.cris.cris_atelie_back.infrastructure.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.cris.cris_atelie_back.infrastructure.entitys.Usuario;

public interface IUsuario extends JpaRepository<Usuario, String>{
    UserDetails findByLogin(String login);
}
