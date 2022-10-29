import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {ProveedorI} from '../../modelos/proveedor.interface'
import {ApiService} from '../../servicios/api/api.service'
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute,private router:Router,private api:ApiService) { }
  datosproveedor:ProveedorI;
  editarFor=new FormGroup({
    name:new FormControl(''),
    company_name:new FormControl(''),
    contact_number:new FormControl(''),
    contact_name:new FormControl(''),});
  ngOnInit(): void {
    let pointsalename= this.activerouter.snapshot.paramMap.get('name');
    console.log(pointsalename);
    this.api.getsingleProvider(pointsalename).subscribe(data=>{
      this.datosproveedor=data;
      this.editarFor.setValue({
        'name':this.datosproveedor.ruc,
        'company_name':this.datosproveedor.company_name,
        'contact_number':this.datosproveedor.contact_number,
        'contact_name':this.datosproveedor.contact_name,
      });
    
    })
  }
  postForm(form){
    this.api.postProveedor(form).subscribe(data=>{
      console.log(data);
    })
    this.router.navigate(['proveedor'])
    .then(() => {
      window.location.reload();
    });
  
}
}
