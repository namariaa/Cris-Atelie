package com.cris.cris_atelie_back.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cris.cris_atelie_back.bussiness.ProdutoService;
import com.cris.cris_atelie_back.infrastructure.entitys.Produto;

@RestController
@RequestMapping("/produto")
public class ProdutoController{
    private ProdutoService produtoService;

    public ProdutoController(ProdutoService produto){
        this.produtoService = produto;
    }

    @PostMapping
    public ResponseEntity<Void> postProduto(@RequestBody Produto produto){
        this.produtoService.postProduto(produto);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<Produto> getProduto(@RequestParam Integer id){
        return ResponseEntity.ok(this.produtoService.getProduto(id));
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteProduto(@RequestParam Integer id){
        this.produtoService.deleteProduto(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping
    public ResponseEntity<Void> putProduto(@RequestParam Integer id, @RequestBody Produto produto){
        this.produtoService.patchProduto(id, produto);
        return ResponseEntity.ok().build();
    }
}