import { Component, OnInit, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { HeroService } from 'src/app/services/Hero.services';
import { Router } from '@angular/router';

// Decorador:
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  ngOnDestroy(){
    console.log("Evento ngOnDestroy");
  }

  ngAfterViewChecked(){
    console.log("Evento AfterViewCheck");
  }

  ngAfterViewInit(){
    console.log("Evento AfterViewInit");
  }

  ngAfterContentChecked(){
    console.log("Evento AfterContentChecked");
  }

  ngAfterContentInit(){
    console.log("Evento AfterContentInit");
  }

  constructor( private heroService: HeroService, private _aRouter: Router) { 
    console.log("Constructor de la clase");
  }

  ArrayHeros: any [] = [];

  ngOnChanges(){
    console.log("evento ngOnChanges");
  }

  // Se ejecuta cuando se termina de renderizar el componente.
  ngOnInit(): void {
    this.ArrayHeros = this.heroService.getHeros();
  }

  Navegar(index){
    console.log(index);
    this._aRouter.navigate(['../hero',index])
  }

}