import { Request, Response } from 'express';
import { Docente } from '../Classes/Docente';
import { connection } from '../data/connections';

export const criarDocente = async(req: Request, res: Response) => {
    let errorCode = 400;
    const {nome, email, data_nasc, turma_id} = req.body
    try {
        let novoDocente = new Docente(nome, email, data_nasc, turma_id)
        if (!nome && !email && !data_nasc && !turma_id) {
            errorCode = 422;
            throw new Error("Preencha todos os campos")
        }
        else if(!nome){
            errorCode = 422;
            throw new Error("Preencha seu nome")
        }
        else if(!email){
            errorCode = 422;
            throw new Error("Preencha seu email")
        }
        else if(!data_nasc){
            errorCode = 422;
            throw new Error("Preencha sua data_nasc")
        }
        else if(!turma_id){
            errorCode = 422;
            throw new Error("Preencha sua turma")
        }
        await connection("docente")
            .insert(novoDocente)
        
        res.status(201).send("Docente criado com sucesso")
    }
    catch(e: any) {
        switch (e.message) {
          case "Preencha todos os campos":
            res.status(errorCode).send({ message: e.message });
            break;
          case "Preencha seu nome":
            res.status(errorCode).send({ message: e.message });
            break;
          case "Preencha seu email":
            res.status(errorCode).send({ message: e.message });
            break;
          case "Preencha sua data_nasc":
            res.status(errorCode).send({ message: e.message });
            break;
          case "Preencha sua turma":
            res.status(errorCode).send({ message: e.message });
            break;

          default:
            res.status(500).send(e.sqlMessage || e.message);
            break;
        }
    }
}

