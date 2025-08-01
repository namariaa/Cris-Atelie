package com.cris.cris_atelie_back.bussiness;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cris.cris_atelie_back.infrastructure.repository.IUsuario;

@Service
public class AuthService implements UserDetailsService {

    @Autowired
    IUsuario repository;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        return repository.findByLogin(login);
    }
    
}
