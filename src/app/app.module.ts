import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { BarleftComponent } from './plantillas/barleft/barleft.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


/* import { LoginComponent } from './vistas/login/login.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { PuntoVentaComponent } from './vistas/punto-venta/punto-venta.component';
import { ProveedoresComponent } from './vistas/proveedores/proveedores.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { NuevoPuntoVentaComponent } from './vistas/nuevo-punto-venta/nuevo-punto-venta.component';
import { EditarPuntoVentaComponent } from './vistas/editar-punto-venta/editar-punto-venta.component';
import { NuevoProveedorComponent } from './vistas/nuevo-proveedor/nuevo-proveedor.component';
import { EditarProveedorComponent } from './vistas/editar-proveedor/editar-proveedor.component';
import { NuevoUsuarioComponent } from './vistas/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './vistas/editar-usuario/editar-usuario.component'; */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarleftComponent,
    routingComponents
    /* LoginComponent,
    DashboardComponent,
    PuntoVentaComponent,
    ProveedoresComponent,
    UsuariosComponent,
    NuevoPuntoVentaComponent,
    EditarPuntoVentaComponent,
    NuevoProveedorComponent,
    EditarProveedorComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
