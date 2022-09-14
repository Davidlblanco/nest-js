import { Module } from "@nestjs/common";
import { IsNomeDeUsuarioUnicoConstraint } from "./isNomeDeUsuarioUnico";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioService, IsNomeDeUsuarioUnicoConstraint]
})
export class UsuarioModule {

}