package com.cris.cris_atelie_back.bussiness;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.cris.cris_atelie_back.infrastructure.entitys.Produto;
import com.cris.cris_atelie_back.infrastructure.repository.IProduto;

@Service
public class ProdutoService {
    public IProduto produtos;

    public ProdutoService(IProduto produto){
        this.produtos = produto;
    }

    public void postProduto(Produto produto){
        this.produtos.saveAndFlush(produto); //Salva e fecha a consexão com o banco
    }

    public Produto getProduto(Integer id){
        return this.produtos.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado"));
        
    }

    public void deleteProduto(Integer id){ 
        this.produtos.deleteById(id);
    }

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
