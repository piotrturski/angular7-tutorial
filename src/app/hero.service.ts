import { HEROES } from './heroes/mock-heroes';
import { Hero } from './heroes/hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

getHeroes(): Hero[] {
  return HEROES
}

  constructor() { }
}
