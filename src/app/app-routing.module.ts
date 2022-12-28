import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { InfoEstudianteComponent } from './pages/info-estudiante/info-estudiante.component';
import { InfoMatriculasComponent } from './pages/info-matriculas/info-matriculas.component';
import { InfoDocenteComponent } from './pages/info-docente/info-docente.component';
import { InfoModalidadComponent } from './pages/info-modalidad/info-modalidad.component';
import { InfoOfertaComponent } from './pages/info-oferta/info-oferta.component';

const routes: Routes = [
  {path: "principal", component: PrincipalComponent},
  {path: "sesion", component: InicioSesionComponent },
  {path: "registro", component: RegistroComponent}, 
  {path: "infoEstudiante", component: InfoEstudianteComponent},
  {path: "infoMatricula", component: InfoMatriculasComponent},
  {path: "infoDocente", component: InfoDocenteComponent},
  {path: "infomodalidad", component: InfoModalidadComponent},
  {path: "infooferta", component: InfoOfertaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
