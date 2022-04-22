import { Request, Response } from 'express';
import { connection } from '../data/connections';
import { v4 as uuidv4 } from 'uuid';


export class CriarEstudante {
    async criarEstudante(req: Request, res: Response) {
        let errorCode = 400
        try {
            const {nome, email, data_nasc, turma_id} = req.body
            if (!nome || !email || !data_nasc || !turma_id) {
                errorCode = 422
                throw new Error("Preencha todos os campos")
            }
            await connection("estudante")
                .insert({
                    id: uuidv4(),
                    nome: nome,
                    email: email,
                    data_nasc: data_nasc,
                    turma_id: turma_id
                })
            res.status(201).send("Estudante criado com sucesso")
        }
        catch(e) {
            res.status(errorCode).send(e.message)
        }
    }
}