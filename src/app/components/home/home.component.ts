import { Component, Input, OnInit } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() escena!: EscenaComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

}
