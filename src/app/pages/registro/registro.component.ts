import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from '../../domain/registro';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  registro: Registro = new Registro();

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  registrarse(){
    console.log(this.registro)
  }

  regresar(){
    this.route.navigate(['sesion'])
  }

}
