import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotosComponent } from './motos/motos.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistroMotoComponent } from './registro-moto/registro-moto.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { SistemaControlComponent } from './sistema-control/sistema-control.component';
import { EntradaComponent } from './entrada/entrada.component';
import { SalidaComponent } from './salida/salida.component';
import { RegistroEntradaComponent } from './registro-entrada/registro-entrada.component';
import { RegistroSalidaComponent } from './registro-salida/registro-salida.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'motos', component: MotosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'registro-usuario', component: RegistroUsuariosComponent },
  { path: 'registro-moto', component: RegistroMotoComponent },
  { path: 'sistema-control', component: SistemaControlComponent },
  { path: 'entrada', component: EntradaComponent },
  { path: 'salida', component: SalidaComponent },
  { path: 'registro-entrada', component: RegistroEntradaComponent },
  { path: 'registro-salida', component: RegistroSalidaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
