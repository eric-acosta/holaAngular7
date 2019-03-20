import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  nombre: string;
  apodo: string;
  lista: string[]=[];
  
  recepcionarValor(e: any){
    this.nombre = e.target.value;
  }
  agregar(){
    this.lista.push(this.apodo)

  }

}
