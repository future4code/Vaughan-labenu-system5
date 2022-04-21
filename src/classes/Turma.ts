import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
export class Turma {
    id: string
    nome: string
    modulo: string
    constructor(nome:string, modulo:string) {
        this.id = uuidv4 ()
        this.nome = nome
        this.modulo = modulo
    }
    public retornaTurma(): string{
        return this.nome
     }

    async criarTurma(req: Request, res: Response) {
         try {
             
         } catch (error) {
             
         }
     }
}