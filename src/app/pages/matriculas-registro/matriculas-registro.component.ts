import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Matricula } from '../../domain/matricula';

@Component({
  selector: 'app-matriculas-registro',
  templateUrl: './matriculas-registro.component.html',
  styleUrls: ['./matriculas-registro.component.scss']
})
export class MatriculasRegistroComponent implements OnInit {

  matricula: Matricula = new Matricula();
  matriculas: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.route.navigate(["principalLoggin"])
  }

  registro(){
    console.log(this.matricula)
  }
}
