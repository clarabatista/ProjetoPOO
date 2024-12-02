package com.teste.demo.cadastro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teste.demo.cadastro.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {}
