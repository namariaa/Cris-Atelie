package com.cris.cris_atelie_back.infrastructure.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cris.cris_atelie_back.infrastructure.entitys.Produto;

public interface IProduto extends JpaRepository<Produto,Integer> {
    
} 
