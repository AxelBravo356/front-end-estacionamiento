import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MotosComponent } from './motos/motos.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistroMotoComponent } from './registro-moto/registro-moto.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { SistemaControlComponent } from './sistema-control/sistema-control.component';
import { EntradaComponent } from './entrada/entrada.component';
import { SalidaComponent } from './salida/salida.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// DatePicker
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { RegistroEntradaComponent } from './registro-entrada/registro-entrada.component';
import { RegistroSalidaComponent } from './registro-salida/registro-salida.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MotosComponent,
    HomeComponent,
    UsuariosComponent,
    RegistroMotoComponent,
    RegistroUsuariosComponent,
    SistemaControlComponent,
    EntradaComponent,
    SalidaComponent,
    RegistroEntradaComponent,
    RegistroSalidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
