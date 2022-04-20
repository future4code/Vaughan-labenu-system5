"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
const Usuarios_1 = require("./Usuarios");
class Estudante extends Usuarios_1.Usuarios {
    constructor(nome, email, data_nasc, turma_id) {
        super(nome, email, data_nasc, turma_id);
    }
    retornaData() {
        return this.nome;
    }
}
exports.Estudante = Estudante;
//# sourceMappingURL=Estudante.js.map