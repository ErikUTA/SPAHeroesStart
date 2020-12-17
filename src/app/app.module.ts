import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HerosComponent } from './components/heros/heros.component';
import { AboutComponent } from './components/about/about.component';

// Rutas
import { provideRoutes, RouterModule } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizadoPipe } from './pipes/capitalizado/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/domseguro/dom-seguro.pipe';
import { PasswordPipe } from './pipes/password/password.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HeroesApiComponent } from './components/heroes-api/heroes-api.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HerosComponent,
    AboutComponent,
    Error404Component,
    HeroComponent,
    BuscadorComponent,
    HeroCardComponent,
    PipesComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    PasswordPipe,
    HeroesApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'heros', component: HerosComponent},
    {path: 'about', component: AboutComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'hero/:id', component: HeroComponent},
    {path: 'results/:termino', component:BuscadorComponent},
    {path: 'api', component: HeroesApiComponent},
    {path: '**', pathMatch: 'full', component: Error404Component} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
