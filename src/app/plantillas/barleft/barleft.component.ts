import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-barleft',
  templateUrl: './barleft.component.html',
  styleUrls: ['./barleft.component.css']
})
export class BarleftComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
