import { Usuarios } from "./Usuarios";

export class Estudante extends Usuarios{
    hobbies: string[]
    constructor(
         nome: string, 
         email: string, 
         data_nasc: string,
         turma_id:string
    ){
        super(nome, email, data_nasc, turma_id)
    }
    public retornaData(): string{
       return this.nome
    }
}