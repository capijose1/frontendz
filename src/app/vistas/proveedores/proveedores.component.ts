import { Component, OnInit } from '@angular/core';
import{ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router'
import {ProveedorI} from '../../modelos/proveedor.interface'
import { ProveedoresI } from 'src/app/modelos/proveedores.interface';
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores:ProveedoresI[];
  constructor(private router:Router,private api:ApiService) { }
  editarFor=new FormGroup({
    name:new FormControl(''),
    company_name:new FormControl(''),
    contact_number:new FormControl(''),
    contact_name:new FormControl(''),});
  ngOnInit(): void {
    this.api.getAllProveedores().subscribe(data=>{
      this.proveedores=data;
    })
  }
  crear_proveedor(){
    this.router.navigate(['nuevo_proveedor']);
  }
  editarproveedor(name){
    this.router.navigate(['editar_proveedor',name])
  }
  eliminarproveedor(name){
    let datos:ProveedorI=name;
    this.api.deleteprovider(name).subscribe(data=>console.log(data));
    this.router.navigate(['puntoventa']).then(() => {
    window.location.reload();
  });}

}
