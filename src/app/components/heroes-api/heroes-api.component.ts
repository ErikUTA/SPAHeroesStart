import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from 'src/app/models/hero';
import { Heroes2Service } from '../../services/heroes2.service'

@Component({
  selector: 'app-heroes-api',
  templateUrl: './heroes-api.component.html',
  styleUrls: ['./heroes-api.component.css']
})
export class HeroesApiComponent implements OnInit {

  constructor(private service: Heroes2Service) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroe: Heroe = new Heroe;
  heroes: any[] = [];
  idGuardado: any;
  altas: '';
  bajas: '';
  cambios: '';
  busqueda: any = [];
  nombre: '';
  bio: '';
  single: any = [];

  getHeroes(){
    return this.service.getHeroes().then((data:any) => {
      this.heroes = data;
      console.log(this.heroes);
    });
  };
 
  postHeroes(form: NgForm){
    this.service.postHeroes(this.heroe).then((data:any) => {
        this.heroe = data;
        console.log('Usuario agregado correctamente' ,this.heroe);
        this.altas = data.msg; 
    }).catch((error)=>{
      console.log('Algo salio mal', error)
    })
  }

  putHeroes(){
    this.service.putHeroes(this.heroe, this.idGuardado).then((data:any) => {
      this.heroe = data;
      console.log(this.heroe);
      this.cambios = data.msg; 
    }).catch((error) =>{
        console.log('Algo sucedio mal', error);        
    });
  }

  bajasHeroes(){
    this.service.deleteHeroes(this.idGuardado).then((data:any) => {
      this.heroe = data;
      console.log(this.heroe);
      this.bajas = data.msg; 
    }).catch((error) =>{
        console.log('Algo sucedio mal', error);        
    });
  }


  idObtener(idHeroe:string){
    this.idGuardado = idHeroe;
    console.log(this.idGuardado);
  }

  searchHero(term){
    this.service.searchHero(term).then((data:any) => {
      this.busqueda = data;
      console.log(this.busqueda);
    });
  }

  mostrarHeroe(idHeroe: string){
    this.idGuardado = idHeroe;
    console.log(this.idGuardado);
    this.service.unSingler(this.idGuardado).then((data:any) => {
      this.single = data;
      console.log(this.single);
    });
  }

} 
