import { Component } from '@angular/core';
import { ClienteService } from './cliente.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  titulo = 'Cadastro de Informações Financeiras';
    
  isInclusao = false;

  taxaCalculada = '0.00';

  riscos = [ ];

  constructor(private clienteService: ClienteService) {
    this.riscos = [ 'A', 'B', 'C' ];
  }

  salvar(form: any){
    const cliente = {
      nome: form.value.nome,
      limite: form.value.limite,
      risco : form.value.risco,     
      taxa: this.taxaCalculada
  };
    this.clienteService.adicionar(cliente);
    form.reset();
    this.isInclusao = true;
  }

  calcularTaxa(value){
    if(value == 'A'){
      this.taxaCalculada = '0.00';
    }else if(value == 'B'){
      this.taxaCalculada = '0.10';
    }else{
      this.taxaCalculada = '0.20';
    }
  }

}
