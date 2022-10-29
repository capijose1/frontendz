import { Injectable } from '@angular/core';
import{LoginI} from '../../modelos/login.interface';
import {ResponseI} from '../../modelos/response.interface';
import {Listpointofsale} from '../../modelos/puntosventa.interface';
import { ProveedoresI } from 'src/app/modelos/proveedores.interface';
import { ProveedorI } from 'src/app/modelos/proveedor.interface';
import {Pointofsale} from '../../modelos/puntoventa.interface'
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string="http://127.0.0.1:8000/api/";
  url2:string="http://api.solodata.es/";
  constructor(private http:HttpClient){}
  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion= this.url2+"auth-token/";
    return this.http.post<ResponseI>(direccion,form);
  }
  getallPointofsale():Observable<Listpointofsale[]>{

    let direccion=this.url+"pointofsale";
    return this.http.get<Listpointofsale[]>(direccion);

  }
  getSinglePointofsale(name):Observable<Pointofsale>{
    let direccion=this.url+"pointofsale/"+name+"/";
    return this.http.get<Pointofsale>(direccion);

  }
  putPointSale(form:Pointofsale,name):Observable<ResponseI>{
    let direccion=this.url+"pointofsale/"+name+"/";
    return this.http.put<ResponseI>(direccion,form);
  }
  deletePointSale(name):Observable<ResponseI>{
    let direccion=this.url+"pointofsale/"+name+"/";

    return this.http.delete<ResponseI>(direccion);
  }
  postPointtSale(form:Pointofsale):Observable<ResponseI>{
    let direccion=this.url+"pointofsale/";
    return this.http.post<ResponseI>(direccion,form);
  
  }

  getAllProveedores():Observable<ProveedoresI[]>{

    let direccion=this.url+"providers";
    return this.http.get<ProveedoresI[]>(direccion);

  }
  deleteprovider(name):Observable<ResponseI>{
    let direccion=this.url+"providers/"+name+"/";
    return this.http.delete<ResponseI>(direccion);
  }
  postProveedor(form:ProveedorI):Observable<ResponseI>{
    let direccion=this.url+"providers/";
    return this.http.post<ResponseI>(direccion,form);
  }
  getsingleProvider(name):Observable<ProveedorI>{
    let direccion=this.url+"providers/"+name+"/";
    return this.http.get<ProveedorI>(direccion);

  }
}
