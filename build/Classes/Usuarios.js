"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuarios = void 0;
const uuid_1 = require("uuid");
class Usuarios {
    constructor(nome, email, data_nasc, turma_id) {
        this.id = (0, uuid_1.v4)();
        this.nome = nome;
        this.email = email;
        this.data_nasc = data_nasc;
        this.turma_id = turma_id;
    }
}
exports.Usuarios = Usuarios;
//# sourceMappingURL=Usuarios.js.map