import { Component, OnInit } from '@angular/core';

import { PokeapiService } from '../services/pokeapi.service';

import { PokemonDetailComponent } from '../components/pokemon-detail/pokemon-detail.component';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private pokeapiService: PokeapiService,
    private modalController: ModalController) {}

  pokemonDataList: any[] = [];

  ngOnInit() {
    for(let i=0; i<15; i++){
      const id = this.pokeapiService.getRandomId(1,1010);
      this.pokeapiService.getPokemon(id).subscribe((data) => {
        this.pokemonDataList.push(data)
      });
    }
  }

  async openPokemonDetail(pokemon: any) {
    const modal = await this.modalController.create({
      component: PokemonDetailComponent,
      componentProps: { pokemon },
    });
    await modal.present();
  }

}
