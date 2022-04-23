import { app } from "./app";
import { buscarDocentes } from "./endPoints/buscarDocentes";
import { buscarEstudante } from "./endPoints/buscarEstudantePorNome";
import { buscarTurmasAtivas } from "./endPoints/buscarTurmasAtivas";
import { criarDocente } from "./endPoints/criarDocente";
import { criarEstudante } from "./endPoints/criarEstudante";
import { criarTurma } from "./endPoints/criarTurma";
import { mudarTurmaDocente } from "./endPoints/mudarDocenteDeTurma";
import { mudarTurma } from "./endPoints/mudarEstudanteDeTurma";
import { mudarTurmaDeModulo } from "./endPoints/mudarModulo";


app.post("/turma", criarTurma);

app.get("/turma", buscarTurmasAtivas);

app.put("/turma", mudarTurmaDeModulo);

app.post("/estudante", criarEstudante);

app.get("/estudante", buscarEstudante);

app.put("/estudante", mudarTurma);

app.post("/docente", criarDocente);

app.get("/docente", buscarDocentes);

app.put("/docente", mudarTurmaDocente);
