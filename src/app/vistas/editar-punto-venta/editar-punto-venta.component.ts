import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {Pointofsale} from '../../modelos/puntoventa.interface'
import {ApiService} from '../../servicios/api/api.service'
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-editar-punto-venta',
  templateUrl: './editar-punto-venta.component.html',
  styleUrls: ['./editar-punto-venta.component.css']
})
export class EditarPuntoVentaComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute,private router:Router,private api:ApiService) { }
  datosPointofsale:Pointofsale;
  editarFor=new FormGroup({name:new FormControl(''),}
    
  );

  ngOnInit(): void {
    let pointsalename= this.activerouter.snapshot.paramMap.get('name');
    console.log(pointsalename);
    this.api.getSinglePointofsale(pointsalename).subscribe(data=>{
      this.datosPointofsale=data;
      this.editarFor.setValue({
        'name':this.datosPointofsale.name
      });
    
    })
  }
  postForm(form){
    let pointsalename= this.activerouter.snapshot.paramMap.get('name');
    this.api.putPointSale(form,pointsalename).subscribe(data=>{
      console.log(data);
    });
    this.router.navigate(['puntoventa'])
  .then(() => {
    window.location.reload();
  });

  }

}
