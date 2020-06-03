import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {

  autorizacaoURL = 'http://localhost:9020/autorizacao';

  constructor(private http: HttpClient){}

  listar(){
    return this.http.get<any[]>(`${this.autorizacaoURL}`);
  }

}
