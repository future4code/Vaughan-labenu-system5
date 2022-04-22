import { Request, Response } from 'express';
import { connection } from '../data/connections';

export class MudarModulo {
    async mudarModulo (req: Request, res: Response) {
        let errorCode = 400
        try {
            const {id, modulo} = req.body
            if(!id && !modulo) {
                errorCode = 422
                throw new Error("Preencha todos os campos")
            }
            let result = await connection("turma")
                .update({
                    modulo: modulo
                })
                .where("id", "=", id)

            res.sendStatus(200).send(result)
        }
        catch(e) {
            res.sendStatus(errorCode).send(e.message)
        }
    }
}