import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Horario } from '../../domain/horario';

@Component({
  selector: 'app-horarios-registro',
  templateUrl: './horarios-registro.component.html',
  styleUrls: ['./horarios-registro.component.scss']
})
export class HorariosRegistroComponent implements OnInit {

  horario: Horario = new Horario();
  horarios: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.route.navigate(["principalLoggin"])
  }

  registro(){
    console.log(this.horario)
  }

}
