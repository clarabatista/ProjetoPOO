package com.teste.demo.cadastro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teste.demo.cadastro.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {}

