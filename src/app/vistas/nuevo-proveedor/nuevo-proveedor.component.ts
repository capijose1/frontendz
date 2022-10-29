import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {ApiService} from '../../servicios/api/api.service'
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-nuevo-proveedor',
  templateUrl: './nuevo-proveedor.component.html',
  styleUrls: ['./nuevo-proveedor.component.css']
})
export class NuevoProveedorComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute,private router:Router,private api:ApiService) { }
  nuevoForm=new FormGroup({
    name:new FormControl(''),
    company_name:new FormControl(''),
    contact_number:new FormControl(''),
    contact_name:new FormControl(''),});
  ngOnInit(): void {
  }

  postForm(form){
    this.api.postProveedor(form).subscribe(data=>{
      console.log(data);
    })

  
}
}
