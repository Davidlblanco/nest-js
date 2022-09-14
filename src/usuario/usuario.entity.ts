import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import { IsNomeDeUsuarioUnico } from "./isNomeDeUsuarioUnico";

export class Usuario {
    id: number;

    @IsNomeDeUsuarioUnico({ message: 'nomeDeUsuario deve ser único' })
    @IsNotEmpty({ message: 'nomeDeUsuario é obrigatório.' })
    @Expose({ name: 'username' })
    @IsString({ message: 'nomeDeUsuario precisa ser uma string.' })
    nomeDeUsuario: string;

    @Expose({ name: 'email' })
    @IsEmail({}, { message: 'email precisa ser um endereço de email válido.' })
    email: string;

    @Expose({ name: 'password' })
    @Exclude({ toPlainOnly: true })
    @IsNotEmpty({ message: 'senha é obrigatório.' })
    senha: string;

    @Expose({ name: 'fullName' })
    @IsNotEmpty({ message: 'nomeCompleto é obrigatório.' })
    nomeCompleto: string;

    @Expose({ name: 'joinDate' })
    dataDeEntrada: Date;
}