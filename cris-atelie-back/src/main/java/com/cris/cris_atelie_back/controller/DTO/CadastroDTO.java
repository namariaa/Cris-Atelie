package com.cris.cris_atelie_back.controller.DTO;

import com.cris.cris_atelie_back.infrastructure.entitys.bases.UserRole;

public record CadastroDTO(String login, String senha,UserRole papel, String nome ) {
    
}
