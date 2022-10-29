import { Component, OnInit } from '@angular/core';
import{ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router'
import {Listpointofsale} from '../../modelos/puntosventa.interface'
import { Pointofsale } from 'src/app/modelos/puntoventa.interface';
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-punto-venta',
  templateUrl: './punto-venta.component.html',
  styleUrls: ['./punto-venta.component.css']
})
export class PuntoVentaComponent implements OnInit {
  pointsofsale:Listpointofsale[];
  constructor(private api:ApiService,private router:Router) { };
  editarFor=new FormGroup({name:new FormControl(''),}
    
  );

  ngOnInit(): void {
    this.api.getallPointofsale().subscribe(data=>{
      this.pointsofsale=data;
    })
  }
  
  editarpointofsale(name){
    this.router.navigate(['editar_puntoventa',name])
  }
  eliminarpointofsale(name){
    this.api.deletePointSale(name).subscribe(data=>console.log(data));
    this.router.navigate(['puntoventa']).then(() => {
    window.location.reload();
  });

  }
  crearpointofsale(){
    this.router.navigate(['nuevo_puntoventa']);
  }

}
