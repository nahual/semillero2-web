import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { EMPRESAS } from '../mock-empresa';

@Component({
  selector: 'app-empresa-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class EmpresaListaComponent implements OnInit {

	selectedCompany = {};
  items = {
  	companies : EMPRESAS
  };
 

  constructor() { }

  ngOnInit() {
  }

  onEdit(empresa: Empresa): void {
    this.selectedCompany = empresa;
  }

    onRemove(empresa: Empresa): void {
    this.selectedCompany = empresa;
  }
}
