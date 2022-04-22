import { Request, Response } from 'express';
import { connection } from '../data/connections';

export const mudarTurmaDocente = async(req: Request, res: Response) => {
    const {turma_id, docente_id} = req.body
    try {
        console.log(turma_id, docente_id)
        if(!turma_id || !docente_id) {
            throw new Error("Preencha todos os campos")
        }
        await connection("docente")
            .update({
                turma_id: turma_id
            })
            .where({
                id: docente_id
            })
            
        res.status(200).send("O docente mudou de turma")
    }
    catch(e: any) {
        res.status(500).send(e.sqlMessage || e.message)
    }
}