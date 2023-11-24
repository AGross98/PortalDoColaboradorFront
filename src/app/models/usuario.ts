import { Funcionario } from "./funcionarios"

export interface Usuario{
    user: string,
    senha: string,
    funcionario : Funcionario;
    
}