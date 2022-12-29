import { Component, OnInit } from '@angular/core';
import { Calificacion } from '../../domain/calificacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calificaciones-registro',
  templateUrl: './calificaciones-registro.component.html',
  styleUrls: ['./calificaciones-registro.component.scss']
})
export class CalificacionesRegistroComponent implements OnInit {

  calificacion: Calificacion = new Calificacion();
  calificaciones: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.route.navigate(["principalLoggin"])
  }

  registro(){
    console.log(this.calificacion)
  }

}
