import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../../domain/estudiante';

@Component({
  selector: 'app-estudiante-registro',
  templateUrl: './estudiante-registro.component.html',
  styleUrls: ['./estudiante-registro.component.scss']
})
export class EstudianteRegistroComponent implements OnInit {

  estudiante: Estudiante = new Estudiante();
  estudiantes: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.route.navigate(["principalLoggin"])
  }

  registro(){
    console.log(this.estudiante)
  }
}
