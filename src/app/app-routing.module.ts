import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './vistas/login/login.component';
import {DashboardComponent} from './vistas/dashboard/dashboard.component';
import {ProveedoresComponent} from './vistas/proveedores/proveedores.component';
import {PuntoVentaComponent} from './vistas/punto-venta/punto-venta.component';
import {UsuariosComponent} from './vistas/usuarios/usuarios.component';

import {NuevoProveedorComponent} from './vistas/nuevo-proveedor/nuevo-proveedor.component';
import {EditarProveedorComponent} from './vistas/editar-proveedor/editar-proveedor.component';

import {NuevoPuntoVentaComponent} from './vistas/nuevo-punto-venta/nuevo-punto-venta.component';
import {EditarPuntoVentaComponent} from './vistas/editar-punto-venta/editar-punto-venta.component';

import {NuevoUsuarioComponent} from './vistas/nuevo-usuario/nuevo-usuario.component';
import {EditarUsuarioComponent} from './vistas/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'puntoventa',component:PuntoVentaComponent},
  {path:'proveedor',component:ProveedoresComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'nuevo_puntoventa',component:NuevoPuntoVentaComponent},
  {path:'editar_puntoventa/:name',component:EditarPuntoVentaComponent},

  {path:'nuevo_proveedor',component:NuevoProveedorComponent},
  {path:'editar_proveedor',component:EditarProveedorComponent},

  {path:'nuevo_usuario',component:NuevoUsuarioComponent},
  {path:'editar_usuario',component:EditarUsuarioComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,
  PuntoVentaComponent,ProveedoresComponent,UsuariosComponent,NuevoPuntoVentaComponent,
  EditarPuntoVentaComponent,NuevoProveedorComponent,EditarProveedorComponent,NuevoUsuarioComponent,EditarUsuarioComponent]