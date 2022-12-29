import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  getInicioSesion() {
    let url = "http://localhost:3000/proyectoFinal/ws/clientes"
    return this.http.get<any>(url);
  }

}
