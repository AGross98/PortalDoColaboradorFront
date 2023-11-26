import { Funcionario } from "./funcionarios";

export interface Jornada{

    ponto: Date,
    funcionarioId: number,
    funcionario? : Funcionario
}