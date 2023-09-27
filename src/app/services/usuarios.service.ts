import { HttpClient } from '@angular/common/http';
import { CriarContaRequestModel } from '../models/usuarios/criarconta-request.model';
import { Observable } from 'rxjs';
import { CriarContaResponseModel } from '../models/usuarios/criarconta-response.model';
import { environment } from 'src/environments/environment.development';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class UsuariosService {


  //construtor
  constructor(
    //injeção de dependência
    private httpClient: HttpClient
  ) {}


  /*
    Método para executar a criação de conta de usuário
    */
  criarConta(
    model: CriarContaRequestModel
  ): Observable<CriarContaResponseModel> {
    //Requisição POST para o serviço
    return this.httpClient.post<CriarContaResponseModel>(
      environment.apiContatos + '/criar-conta',
      model
    );
  }
}



