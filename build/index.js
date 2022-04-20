"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Docente_1 = require("./Classes/Docente");
const Estudante_1 = require("./Classes/Estudante");
const Turma_1 = require("./Classes/Turma");
const estudante = new Estudante_1.Estudante("Diane", "diane@gmail.com", "15/09/2000", "1");
console.log(estudante);
console.log(estudante.retornaData());
const docente = new Docente_1.Docente("Ana", "Ana@gmail.com", "12/02/2004", "1");
console.log(docente);
console.log(docente.retornaProfessor());
const turma = new Turma_1.Turma("Vaughan", "modulo 5");
console.log(turma);
console.log(turma.retornaTurma());
//# sourceMappingURL=index.js.map