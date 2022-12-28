import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { EstudianteRegistroComponent } from './pages/estudiante-registro/estudiante-registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { InfoEstudianteComponent } from './pages/info-estudiante/info-estudiante.component';
import { InfoMatriculasComponent } from './pages/info-matriculas/info-matriculas.component';
import { InfoDocenteComponent } from './pages/info-docente/info-docente.component';
import { InfoModalidadComponent } from './pages/info-modalidad/info-modalidad.component';
import { InfoOfertaComponent } from './pages/info-oferta/info-oferta.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    EstudianteRegistroComponent,
    InicioSesionComponent,
    RegistroComponent,
    InfoEstudianteComponent,
    InfoMatriculasComponent,
    InfoDocenteComponent,
    InfoModalidadComponent,
    InfoOfertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
