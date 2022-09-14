import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { HttpAdapterHost, AbstractHttpAdapter } from "@nestjs/core";


@Catch()
export class FitroDeExcecaoHttp implements ExceptionFilter {
    private httpAdapter: AbstractHttpAdapter;
    constructor(adapterHost: HttpAdapterHost) {
        this.httpAdapter = adapterHost.httpAdapter;
    }
    catch(exception: Error, host: ArgumentsHost) {
        console.log('teste')
        const contexto = host.switchToHttp()
        const requisicao = contexto.getRequest()
        const resposta = contexto.getResponse()
        const { status, body } = exception instanceof HttpException
            ?
            {
                status: exception.getStatus(),
                body: exception.getResponse()
            }
            : {
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                body: {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: exception.message,
                    timestamp: new Date().toISOString(),
                    path: requisicao.path
                }
            }
        this.httpAdapter.reply(resposta, body, status)
    }

}