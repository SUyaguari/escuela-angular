import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Docente } from '../../domain/docente';

@Component({
  selector: 'app-docentes-registro',
  templateUrl: './docentes-registro.component.html',
  styleUrls: ['./docentes-registro.component.scss']
})
export class DocentesRegistroComponent implements OnInit {

  docente: Docente = new Docente();
  docentes: any;
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.route.navigate(["principalLoggin"])
  }

  registro(){
    console.log(this.docente)
  }
}
