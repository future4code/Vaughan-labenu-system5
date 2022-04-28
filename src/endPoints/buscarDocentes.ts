import { Request, Response } from "express";
import { connection } from "../data/connections";

export const buscarDocentes = async (req: Request, res: Response) => {
  try {
    const resultado = await connection("docente");
    res.status(200).send(resultado);
  } catch (e) {
    res.status(500).send({ message: e.sqlMessage || e.message });
  }
};
