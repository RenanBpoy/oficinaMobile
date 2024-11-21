import { Component, OnInit } from '@angular/core';

import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private pokeapiService: PokeapiService) {}

  pokemonDataList: any[] = [];

  ngOnInit() {
    for(let i=0; i<15; i++){
      const id = this.pokeapiService.getRandomId(1,1010);
      this.pokeapiService.getPokemon(id).subscribe((data) => {
        this.pokemonDataList.push(data)
      });
    }
  }

}
