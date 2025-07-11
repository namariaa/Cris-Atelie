package com.cris.cris_atelie_back.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
    private final ProdutoService produtoService;

    public ProdutoController(ProdutoService produto){
        this.produtoService = produto;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    public ResponseEntity<Void> postProduto(@RequestBody Produto produto){
        try{
            this.produtoService.postProduto(produto);
            return ResponseEntity.ok().build();
        }catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public ResponseEntity<Produto> getProduto(@RequestParam Integer id){
        return ResponseEntity.ok(this.produtoService.getProduto(id));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/all")
    public ResponseEntity<List<Produto>> getAllProduto(){
        return ResponseEntity.ok(this.produtoService.getAllProdutos());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping
    public ResponseEntity<Void> deleteProduto(@RequestParam Integer id){
        this.produtoService.deleteProduto(id);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping
    public ResponseEntity<Void> putProduto(@RequestParam Integer id, @RequestBody Produto produto){
        this.produtoService.patchProduto(id, produto);
        return ResponseEntity.ok().build();
    }
}