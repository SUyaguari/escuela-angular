import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignatura } from '../../domain/asignatura';

@Component({
  selector: 'app-asignaturas-registro',
  templateUrl: './asignaturas-registro.component.html',
  styleUrls: ['./asignaturas-registro.component.scss']
})
export class AsignaturasRegistroComponent implements OnInit {

  asignatura: Asignatura = new Asignatura();
  asignaturas: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.route.navigate(["principalLoggin"])
  }

  registro(){
    console.log(this.asignatura)
  }

}
