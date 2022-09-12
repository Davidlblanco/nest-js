import { Injectable } from "@nestjs/common"
import { Usuario } from "./usuario.entity"
@Injectable()
export class UsuarioService {
    private usuarios = [{
        id: 1,
        nomeDeUsuario: 'david',
        email: "david@teste.com",
        senha: '123456',
        nomeCompleto: 'david lucas blanco',
        dataDeEntrada: new Date()
    }]

    public cria(usuario: Usuario): Usuario {
        this.usuarios.push(usuario)
        return usuario
    }

    public buscaPorNomeDeUsuario(nomeDeUsuario: string) {
        return this.usuarios.find(usuario => usuario.nomeDeUsuario === nomeDeUsuario)
    }
} 
