import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  inicioSesion(){
    this.route.navigate(["sesion"]);
  }

}
