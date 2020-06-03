import { Component, OnInit } from '@angular/core';
import { AutorizacaoService } from '../autorizacao.service';

@Component({
  selector: 'app-autorizacao-listagem',
  templateUrl: './autorizacao-listagem.component.html',
  styleUrls: ['./autorizacao-listagem.component.css']
})
export class AutorizacaoListagemComponent implements OnInit {

  autorizacoes: Array<any>;

  constructor(private autorizacaoService: AutorizacaoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.autorizacaoService.listar().subscribe(dados => this.autorizacoes = dados);
  }

}
