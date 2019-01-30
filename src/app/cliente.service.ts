
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }

  adicionar(cliente: any) {    
    console.log(cliente);
    this.http.post(`http://localhost:9093/clientes`, cliente).subscribe(res => console.log('Done'));
  }

}