import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.mudule';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
