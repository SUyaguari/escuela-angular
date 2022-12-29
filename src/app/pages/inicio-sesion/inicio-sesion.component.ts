import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { autentificacion } from '../../domain/singleton';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  constructor(private route: Router, private aut: autentificacion) { }

  ngOnInit(): void {
  }

  regresar(){
    this.route.navigate(['principal'])
  }

  registro(){
    this.route.navigate(['registro'])
  }

  loggin(){
    this.route.navigate(['principalLoggin'])
  }
}
