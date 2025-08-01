package com.cris.cris_atelie_back.infrastructure.security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.cris.cris_atelie_back.bussiness.TokenService;
import com.cris.cris_atelie_back.infrastructure.repository.IUsuario;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class SecurityFilter extends OncePerRequestFilter {
    @Autowired
    TokenService tokenService;
    @Autowired
    IUsuario userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain){
            var token = this.recoverToken(request);
            if (token != null){
                var subject = this.tokenService.validateToken(token);
                UserDetails user = userRepository.findByLogin(subject);
                var auth = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(auth);
            }else{
                try {
                    filterChain.doFilter(request, response);
                } catch (IOException | ServletException e) {
                    e.printStackTrace();
                }
            }
    }

    private String recoverToken(HttpServletRequest request){
        var header = request.getHeader("Authorization");
        if (header == null) return null;
        return header.replace("Bearer ", "");
    }
    
}
