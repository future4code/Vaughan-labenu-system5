import { Request, Response } from "express";
import { connection } from "../data/connections";

export const buscarEstudante = async (req: Request, res: Response) => {
  const { nome } = req.query;
  let errorCode = 400;
  try {
    if (!nome) {
      errorCode = 422;
      throw new Error("Por favor insira um nome");
    }
    let resultado = await connection("estudante")
      .select("*")
      .where("nome", "like", `%${nome}%`);
    if (resultado.length < 1) {
      errorCode = 422;
      throw new Error("Estudante não encontrado");
    }
    res.status(200).send(resultado);
  } catch (e) {
    switch (e.message) {
      case "Por favor insira um nome":
        res.status(errorCode).send({ message: e.message });
        break;
      case "Estudante não encontrado":
        res.status(errorCode).send({ message: e.message });
        break;

      default:
        res.status(500).send(e.message || e.sqlMessage);
        break;
    }
  }
};
