import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class Heroes2Service {

  constructor(public http: HttpClient ) { }

  getHeroes(){
    return this.http.get('http://localhost:3000/heroesAct').toPromise();
  }

  postHeroes(hrs: Heroe){
    return this.http.post('http://localhost:3000/heroe', hrs).toPromise();
  }
  
  putHeroes(hrs: Heroe, id: string){
    return this.http.put(`http://localhost:3000/heroe/${id}`, hrs).toPromise();
  }

  deleteHeroes(id: string){
    return this.http.delete(`http://localhost:3000/hero/${id}`).toPromise();
  }
  
  searchHero(term){
    return this.http.get(`http://localhost:3000/heroe/${term}`).toPromise();
  }

  unSingler(id: string){
    return this.http.get(`http://localhost:3000/heroe/${id}`).toPromise();
  }

}
