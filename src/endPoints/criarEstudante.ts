import { Request, Response } from "express";
import { connection } from "../data/connections";
import { v4 as uuidv4 } from "uuid";

export class CriarEstudante {
  async criarEstudante(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const { nome, email, data_nasc, turma_id } = req.body;
      if (!nome && !email && !data_nasc && !turma_id) {
        errorCode = 422;
        throw new Error("Preencha todos os campos");
      } else if (!nome) {
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
      await connection("estudante").insert({
        id: uuidv4(),
        nome: nome,
        email: email,
        data_nasc: data_nasc,
        turma_id: turma_id
      });
      res.status(201).send({message: "Estudante criado com sucesso"});
    } catch (e) {
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
}
