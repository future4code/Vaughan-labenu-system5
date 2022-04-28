import { Request, Response } from "express";
import { connection } from "../data/connections";

export const mudarTurmaDeModulo = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
      const { id, modulo } = req.body;
      if (!id && !modulo) {
        errorCode = 422;
        throw new Error("Preencha todos os campos");
      }
      await connection("turma")
        .update({
          modulo: modulo
        })
        .where("id", "=", id);

      res.status(200).send(`Módulo alterado com sucesso para ${modulo}`);
    } catch (e: any) {
      res.sendStatus(errorCode).send({ message: e.message });
    }
  }
