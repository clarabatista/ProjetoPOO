package com.teste.demo.cadastro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teste.demo.cadastro.model.Tarefa;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {}

