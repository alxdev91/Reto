import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { UsuarioComponent } from './usuario/usuario.component';
=======
import { UsuariosComponent } from './usuarios/usuarios.component';
>>>>>>> origin/Develop

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UsuarioComponent
=======
    UsuariosComponent
>>>>>>> origin/Develop
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
