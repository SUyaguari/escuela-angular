import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-loggin',
  templateUrl: './principal-loggin.component.html',
  styleUrls: ['./principal-loggin.component.scss']
})
export class PrincipalLogginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  inicioSesion(){
    this.route.navigate(["sesion"]);
  }

  estudiante(){
    this.route.navigate(['infoEstudiante']);
  }

  matricula(){
    this.route.navigate(['infoMatricula']);
  }

  docente(){
    this.route.navigate(['infoDocente']);
  }

  modalidad(){
    this.route.navigate(['infomodalidad']);
  }

  oferta(){
    this.route.navigate(['infooferta']);
  }

}
