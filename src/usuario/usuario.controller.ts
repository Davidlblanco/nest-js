import { Controller, Body, Post, Get, Param, HttpStatus } from "@nestjs/common"
import { NestResponse } from "../core/http/nest-response"
import { NestResponseBuilder } from "../core/http/nest-response-bulder"
import { Usuario } from "./usuario.entity"
import { UsuarioService } from "./usuario.service"

@Controller('users')
export class UsuarioController {

    constructor(
        private usuarioService: UsuarioService
    ) { }

    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario)
        return usuarioEncontrado

    }

    @Post()
    public cria(@Body() usuario: Usuario): NestResponse {
        const usuarioCriado = this.usuarioService.cria(usuario)

        return new NestResponseBuilder()
            .comStatus(HttpStatus.CREATED)
            .comHeaders({ 'location': `/users/${usuarioCriado.nomeDeUsuario}` })
            .comBody(usuarioCriado)
            .build()
    }
}