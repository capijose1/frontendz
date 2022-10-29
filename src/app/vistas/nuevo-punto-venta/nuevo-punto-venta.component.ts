import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {ApiService} from '../../servicios/api/api.service'
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-nuevo-punto-venta',
  templateUrl: './nuevo-punto-venta.component.html',
  styleUrls: ['./nuevo-punto-venta.component.css']
})
export class NuevoPuntoVentaComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute,private router:Router,private api:ApiService) { }
  nuevoForm=new FormGroup({name:new FormControl(''),}
    
  );
  ngOnInit(): void {
  }
  postForm(form){
      this.api.postPointtSale(form).subscribe(data=>{
        console.log(data);
      })
      this.router.navigate(['puntoventa'])
      .then(() => {
        window.location.reload();
      });
    
  }

}
