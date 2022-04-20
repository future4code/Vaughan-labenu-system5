"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docente = void 0;
const Usuarios_1 = require("./Usuarios");
class Docente extends Usuarios_1.Usuarios {
    constructor(nome, email, data_nasc, turma_id) {
        super(nome, email, data_nasc, turma_id);
    }
    retornaProfessor() {
        return this.nome;
    }
}
exports.Docente = Docente;
//# sourceMappingURL=Docente.js.map