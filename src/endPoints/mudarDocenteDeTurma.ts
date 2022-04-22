import { Request, Response } from 'express';
import { connection } from '../data/connections';

export const mudarTurmaDocente = async(req: Request, res: Response) => {
    const {turma_id, docente_id} = req.body
    try {
        let resultado = await connection("estudante")
            .update({
                turma_id: turma_id
            })
            .where("id", docente_id)
            
        if(!turma_id || !docente_id) {
            throw new Error("Preencha todos os campos")
        }
        res.status(200).send(resultado)
    }
    catch(e: any) {
        res.status(500).send(e.sqlMessage || e.message)
    }
}