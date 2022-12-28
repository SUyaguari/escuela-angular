import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { EstudianteRegistroComponent } from './pages/estudiante-registro/estudiante-registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    EstudianteRegistroComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
