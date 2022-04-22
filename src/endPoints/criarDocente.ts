import { Request, Response } from 'express';
import { Docente } from '../Classes/Docente';
import { connection } from '../data/connections';

export const criarDocente = async(req: Request, res: Response) => {
    const {nome, email, data_nasc, turma_id} = req.body
    try {
        let novoDocente = new Docente(nome, email, data_nasc, turma_id)

        await connection("docente")
            .insert(novoDocente)
        
        res.status(201).send("Docente criado com sucesso")
    }
    catch(e: any) {
        res.status(500).send(e.sqlMessage || e.message)
    }
}

