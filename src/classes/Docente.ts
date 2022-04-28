import { Usuarios } from "./Usuarios";
import { v4 as uuidv4 } from 'uuid';

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