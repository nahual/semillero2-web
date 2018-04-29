import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class EmpresaListaComponent implements OnInit {

  public empresas: Empresa[];

  public totalRecords = 0;
  public pageSize = 2;

	public selectedCompany = {};
   

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.getEmpresasPage(1);
  }

  onEdit(empresa: Empresa): void {
    this.selectedCompany = empresa;
  }

    onRemove(empresa: Empresa): void {
    this.selectedCompany = empresa;
  }

  pageChanged(page: number) {
      this.getEmpresasPage(page);
  }

  getEmpresasPage(page: number): void {
    this.empresaService.getEmpresas(page - 1, this.pageSize).subscribe(
      response => {
        this.totalRecords = response.totalRecords;
        this.empresas = response.results;
      }
    )
  }
}
