import { Request, Response } from "express";
import { connection } from "../data/connections";
import { Turma } from "../classes/Turma";

export const criarTurma = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
      let { nome } = req.body;
      let modulo = "0"
      let novaTurma = new Turma(nome, modulo)

      if (!nome || nome === undefined) {
        errorCode = 422;
        throw new Error("Insira o nome da turma");
      }
      await connection("turma").insert(novaTurma);
      
      res.status(201).send({ message: `Turma ${nome} criada com sucesso!` });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

