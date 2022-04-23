import { app } from "./app";
import { buscarDocentes } from "./endPoints/buscarDocentes";
import { buscarEstudante } from "./endPoints/buscarEstudantePorNome";
import { BuscarTurma } from "./endPoints/buscarTurmasAtivas";
import { criarDocente } from "./endPoints/criarDocente";
import { CriarEstudante } from "./endPoints/criarEstudante";
import { CriarTurma } from "./endPoints/criarTurma";
import { mudarTurmaDocente } from "./endPoints/mudarDocenteDeTurma";
import { mudarTurma } from "./endPoints/mudarEstudanteDeTurma";
import { MudarModulo } from "./endPoints/mudarModulo";

const criarTurma: CriarTurma = new CriarTurma();
let adicionarTurma = criarTurma.criarTurma;

app.post("/turma", adicionarTurma);

const buscarTurmas: BuscarTurma = new BuscarTurma();
let buscarTurmasAtivas = buscarTurmas.buscarTurmasAtivas;

app.get("/turma", buscarTurmasAtivas);

const mudarModulo: MudarModulo = new MudarModulo();
let mudarModuloTurma = mudarModulo.mudarModulo;
app.put("/turma", mudarModuloTurma);

const criarEstudante: CriarEstudante = new CriarEstudante();
let criarNovoEstudante = criarEstudante.criarEstudante;
app.post("/estudante", criarNovoEstudante);

app.get("/estudante", buscarEstudante);

app.put("/estudante", mudarTurma);

app.post("/docente", criarDocente);

app.get("/docente", buscarDocentes);

app.put("/docente", mudarTurmaDocente);
