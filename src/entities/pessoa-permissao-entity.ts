export class PessoaPermissao {
    id: number;
    pessoa_id: number;
    permissao_id: number;

    constructor(partial: Partial<PessoaPermissao>){
        Object.assign(this, partial)
    }
}