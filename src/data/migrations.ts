import { connection } from "./connections";
import turma from "./turma.json"
import estudante from "./estudante.json"
import docente from "./docente.json"
import hobby from "./hobby.json"
import especialidade from "./especialidade.json"
import docenteEspecialidade from "./docenteEspecialidade.json"
import hobbiesEstudante from "./hobbiesEstudante.json"
const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTable =() => connection.raw(`
    CREATE TABLE IF NOT EXISTS turma(
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) UNIQUE NOT NULL,
        modulo VARCHAR(255) DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS estudante(
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (turma_id) REFERENCES turma(id)
    );

    CREATE TABLE IF NOT EXISTS docente(
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (turma_id) REFERENCES turma(id)
    );

    CREATE TABLE IF NOT EXISTS hobby(
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) UNIQUE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS especialidade(
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) UNIQUE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS docente_especialidade(
        id VARCHAR(255) PRIMARY KEY,
        docente_id VARCHAR(255) NOT NULL,
        especialidade_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (docente_id) REFERENCES docente(id),
        FOREIGN KEY (especialidade_id) REFERENCES especialidade(id)
    );

    CREATE TABLE IF NOT EXISTS estudante_hobby(
        id VARCHAR(255) PRIMARY KEY,
        estudante_id VARCHAR(255) NOT NULL,
        hobby_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (estudante_id) REFERENCES docente(id),
        FOREIGN KEY (hobby_id) REFERENCES especialidade(id)
    );

`)
//criando tabelas
.then(() => console.log("Tabelas criadas"))
.catch(printError)

//inserindo Turma
const insertTurma = () => connection("turma")
.insert(turma)
.then(()=> console.log("Turmas criadas com sucesso"))
.catch(printError)

//inserindo Estudante
const insertEstudante = () => connection("estudante")
.insert(estudante)
.then(()=> console.log("Estudante criado com sucesso"))
.catch(printError)

//inserindo docente
const insertDocente = () => connection("docente")
.insert(docente)
.then(()=> console.log("Docente criado com sucesso"))
.catch(printError)

//inserindo hobby
const insertHobby = () => connection("hobby")
.insert(hobby)
.then(()=> console.log("Hobby criado com sucesso"))
.catch(printError)

//inserindo especialidade
const insertEspecialidade = () => connection("especialidade")
.insert(especialidade)
.then(()=> console.log("Especialidade criada com sucesso"))
.catch(printError)

//inserindo especialidade do docente
const insertDocenteEspecialidade = () => connection("docente_especialidade")
.insert(docenteEspecialidade)
.then(()=> console.log("Especialidade do docente criada com sucesso"))
.catch(printError)

//inserindo hobby do estudante
const insertHobbyEstudante = () => connection("estudante_hobby")
.insert(hobbiesEstudante)
.then(()=> console.log("Hobby do estudante criado com sucesso"))
.catch(printError)

createTable()
.then(insertTurma)
.then(insertEstudante)
.then(insertDocente)
.then(insertHobby)
.then(insertEspecialidade)
.then(insertDocenteEspecialidade)
.then(insertHobbyEstudante)