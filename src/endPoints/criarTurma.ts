import { Request, Response } from 'express';
import { connection } from '../data/connections';
import { v4 as uuidv4 } from 'uuid';

export class CriarTurma {
    
    async criarTurma(req: Request, res: Response): Promise<void> {
        let errorCode = 400
         try {
             let {nome} = req.body
             if(!nome || nome === undefined) {
                 errorCode = 422
                 throw new Error("Insira o nome da turma")
             } 
            await connection("turma") 
                .insert({
                    id: uuidv4(),
                    nome: nome
                })
            res.status(201).send(`Turma ${nome} criada com sucesso!`)
             
         } catch (error) {
             res.status(errorCode).send(error.message)
         }
     }
}