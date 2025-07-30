package com.cris.cris_atelie_back.infrastructure.entitys.bases;

public enum UserRole{
    ADM("admin"),
    CLIENTE("cliente");

    private String role;

    UserRole(String role){
        this.role = role;
    }

    public String GetRole(){
        return this.role;
    }
}