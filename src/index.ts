import { app } from "./app"
import { Docente } from "./Classes/Docente"
import { Estudante } from "./Classes/Estudante"
import { Turma } from "./Classes/Turma"

// const estudante: Estudante = new Estudante("Diane", "diane@gmail.com", "15/09/2000", "1")
// console.log(estudante)
// console.log(estudante.retornaData())

// const docente: Docente = new Docente("Ana", "Ana@gmail.com", "12/02/2004", "1")
// console.log(docente)
// console.log(docente.retornaProfessor())

// const turma: Turma = new Turma("Vaughan", "modulo 5")
// console.log(turma)
// console.log(turma.retornaTurma())
app.post('/criar/tarefa')