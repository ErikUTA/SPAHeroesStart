import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit, OnChanges, DoCheck {

  ngDoCheck(){
    console.log("Evento ngDoCheck")
  }

  ngOnChanges(){
    console.log("Evento ngOnChanges")
  }


  // Recibir información de un componente PADRE
  @Input() PadreHero: any = {};
  @Input() Index: number;

  // Mandar información de HIJO - PADRE se utilzan output
  @Output() selectedHero: EventEmitter<number>;

  constructor( private router: Router ) {
    console.log("Constructor de Card");
    this.selectedHero = new EventEmitter();
   }

  ngOnInit(): void {
    console.log("Evento ngOnInit");
  }

  Navegar(){
    this.router.navigate(['/hero', this.Index]);
  }

}
