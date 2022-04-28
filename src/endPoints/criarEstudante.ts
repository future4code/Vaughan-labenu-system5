import { Request, Response } from "express";
import { connection } from "../data/connections";
import { v4 as uuidv4 } from "uuid";
import { Estudante } from "../classes/Estudante";

export const criarEstudante = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
      const { nome, email, data_nasc, turma_id } = req.body;
      let novoEstudante = new Estudante(nome, email, data_nasc, turma_id)
      if (!nome) {
        errorCode = 422;
        throw new Error("Preencha seu nome");
      } else if (!email) {
        errorCode = 422;
        throw new Error("Preencha seu email");
      } else if (!data_nasc) {
        errorCode = 422;
        throw new Error("Preencha sua data_nasc");
      } else if (!turma_id) {
        errorCode = 422;
        throw new Error("Preencha sua turma");
      }
      await connection("estudante").insert(novoEstudante);

      res.status(201).send({message: "Estudante criado com sucesso"});
      
    } catch (e:any) {
      switch (e.message) {
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
          res.status(500).send({message: e.sqlMessage || e.message});
          break;
      }
    }
  }

