import { connection } from "./connections";
import turma from "./turma.json"
import estudante from "./estudante.json"
const printError = (error: any) => { console.log(error.sqlMessage || error.message) }
const createTable =() => connection.raw(`
    CREATE TABLE IF NOT EXISTS turma(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        modulo VARCHAR(255) DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS estudante(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL
        FOREIGN KEY (turma_id) REFERENCES turma(id)
    );

    CREATE TABLE IF NOT EXISTS docente(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL
        FOREIGN KEY (turma_id) REFERENCES turma(id)
    );

    CREATE TABLE IF NOT EXISTS hobby(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL
    );
    CREATE TABLE IF NOT EXISTS especialidade(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS docente_especialidade(
        id VARCHAR(255) PRIMARY KEY,
        docente_id VARCHAR(255) NOT NULL
        especialidade_id VARCHAR(255) NOT NULL
        FOREIGN KEY (docente_id) REFERENCES docente(id)
        FOREIGN KEY (especialidade_id) REFERENCES especialidade(id)
    );

    CREATE TABLE IF NOT EXISTS estudante_hobby(
        id VARCHAR(255) PRIMARY KEY,
        estudante_id VARCHAR(255) NOT NULL
        hobby_id VARCHAR(255) NOT NULL
        FOREIGN KEY (estudante_id) REFERENCES docente(id)
        FOREIGN KEY (hobby_id) REFERENCES especialidade(id)
    );
`)
.then(() => console.log("Tabelas criadas"))
.catch(printError)

const insertTurma = () => connection("turma")
.insert(turma)
.then(()=> console.log("Turmas criadas com sucesso"))
.catch(printError)

const insertEstudante = () => connection("estudante")
.insert(estudante)
.then(()=> console.log("Turmas criadas com sucesso"))
.catch(printError)