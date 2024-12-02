CREATE TABLE Usuarios (
    id_usuario INT NOT NULL,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(100)
);

CREATE TABLE Tarefas (
    id_tarefa INT NOT NULL,
    titulo VARCHAR(100),
    ds_tarefa VARCHAR(100),
    dt_prazo DATE,
    ds_status VARCHAR(20),
    id_usuario INT NOT NULL,
);

CREATE TABLE Categorias (
    id_categoria INT NOT NULL,
    nome VARCHAR(50) NOT NULL,
    ds_tarefa VARCHAR(20)
);
