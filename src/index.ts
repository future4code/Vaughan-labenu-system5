import { app } from "./app"
import { Docente } from "./Classes/Docente"
import { Estudante } from "./Classes/Estudante"
import { Turma } from "./Classes/Turma"
import { BuscarTurma } from "./endPoints/buscarTurmasAtivas"
import { CriarEstudante } from "./endPoints/criarEstudante"
import { CriarTurma } from "./endPoints/criarTurma"
import { MudarModulo } from "./endPoints/mudarModulo"

const estudante: Estudante = new Estudante("Diane", "diane@gmail.com", "15/09/2000", "1")
console.log(estudante)
console.log(estudante.retornaData())

const docente: Docente = new Docente("Ana", "Ana@gmail.com", "12/02/2004", "1")
console.log(docente)
console.log(docente.retornaProfessor())

const turma: Turma = new Turma("Vaughan", "modulo 5")
console.log(turma)
console.log(turma.retornaTurma())

const criarTurma: CriarTurma = new CriarTurma
let adicionarTurma = criarTurma.criarTurma

app.post('/turma', adicionarTurma)

const buscarTurmas: BuscarTurma = new BuscarTurma
let buscarTurmasAtivas = buscarTurmas.buscarTurmasAtivas

app.get("/turma", buscarTurmasAtivas)

const mudarModulo: MudarModulo = new MudarModulo
let mudarModuloTurma = mudarModulo.mudarModulo
app.put("/turma", mudarModuloTurma)

const criarEstudante: CriarEstudante = new CriarEstudante
let criarNovoEstudante = criarEstudante.criarEstudante
app.post("/estudante", criarNovoEstudante)