package com.cris.cris_atelie_back.controller.DTO;

import com.cris.cris_atelie_back.infrastructure.entitys.bases.UserRole;

public record LoginDTO(String token, UserRole papel, int id) {
    
}
