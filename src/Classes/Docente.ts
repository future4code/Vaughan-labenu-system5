import { Usuarios } from "./Usuarios";
export class Docente extends Usuarios{
    especialidades: string[]
    constructor(
         nome: string, 
         email: string, 
         data_nasc: string,
         turma_id: string
    ){
        super(nome, email, data_nasc, turma_id)
    }
    public retornaProfessor(): string{
       return this.nome
    }
}
