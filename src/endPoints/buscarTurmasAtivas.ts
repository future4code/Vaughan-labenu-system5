import { Request, Response } from "express";
import { connection } from "../data/connections";

export const buscarTurmasAtivas = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400;
    try {
      let result = await connection("turma")
        .select("*")
        .where("modulo", "<>", "0");

      if (result.length < 1) {
        errorCode = 422;
        throw new Error("Nenhuma turma encontrada");
      }
      res.status(200).send(result);
    } catch (e) {
      res.status(errorCode).send(e.message);
    }
  }
