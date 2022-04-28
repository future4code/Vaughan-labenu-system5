import { Request, Response } from "express";
import { connection } from "../data/connections";

export const mudarTurma = async (req: Request, res: Response) => {
  const { turma_id, estudante_id } = req.body;
  try {
    await connection("estudante")
      .update({
        turma_id: turma_id
      })
      .where("id", estudante_id);

    if (!turma_id || !estudante_id) {
      throw new Error("Preencha todos os campos");
    }
    res.status(200).send({ message: "O estudante foi remanejado com sucesso" });
  } catch (e) {
    res.status(500).send({ message: e.sqlMessage || e.message });
  }
};
