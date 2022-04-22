import { Request, Response } from 'express';
import { connection } from '../data/connections';

export const buscarEstudante = async(req: Request, res: Response) => {
    const {nome} = req.query
    try {
        let resultado = await connection("estudante")
            .select("*")
            .where("nome", "like", `%${nome}%`)
        if(resultado.length < 1) {
            throw new Error("Estudante não encontrado")
        }
        res.status(200).send(resultado)
    }
    catch (e) {
        res.status(500).send(e.message || e.sqlMessage)
    }
}