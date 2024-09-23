import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt'

@Injectable()
export class HashService {

    async hashSenha(senha: string): Promise<string> {
        const salt = 10;
        return await bcrypt.hashSync(senha, salt);
    }

    async compararSenha(senha: string, hashedSenha: string): Promise<boolean> {
        return await bcrypt.compareSync(senha, hashedSenha);
    }
}