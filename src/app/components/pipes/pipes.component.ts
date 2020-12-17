import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  Nombre = "Erik Roman";
  ArrayPrueba = ['A', ' B', ' C', ' D', ' E', ' F', ' G', ' H', ' I', ' J', ' K'];
  NombreAlterno = 'rOmErO FlOrEs ErIk RoMaN';
  VideoUrl = 'https://www.youtube.com/embed/bm9V0Gj4Ml4';
  PI = Math.PI;
  Fecha = new Date();
  Precio = 199.99;
  active = true;

  constructor() { }

  ngOnInit(): void {
  }

}
