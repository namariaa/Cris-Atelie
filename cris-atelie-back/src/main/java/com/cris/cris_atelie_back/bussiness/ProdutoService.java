package com.cris.cris_atelie_back.bussiness;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.cris.cris_atelie_back.infrastructure.entitys.Produto;
import com.cris.cris_atelie_back.infrastructure.repository.IProduto;

import jakarta.transaction.Transactional;

@Service
public class ProdutoService {
    public final IProduto produtos;

    public ProdutoService(IProduto produto){
        this.produtos = produto;
    }

    @Transactional 
    public void postProduto(Produto produto){
        this.produtos.saveAndFlush(produto); //Salva e fecha a consexão com o banco
    }

    public List<Produto> getAllProdutos(){
        return this.produtos.findAll(); 
    }

    public Produto getProduto(Integer id){
        return this.produtos.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado")); 
    }

    public void deleteProduto(Integer id){ 
        this.produtos.deleteById(id);
    }

    @Transactional 
    public void patchProduto(Integer id, Produto p){
        Produto salvo = getProduto(id);
         if (p.getName() != null) {
            salvo.setName(p.getName());
        }
        if (p.getDescription() != null) {
            salvo.setDescription(p.getDescription());
        }
        if (p.getValor() != null) {
            salvo.setValor(p.getValor());
        }

        this.produtos.saveAndFlush(salvo);
    }
}
