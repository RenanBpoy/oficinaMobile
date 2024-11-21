import { Component } from '@angular/core';

import { PokeapiService } from '../services/pokeapi.service';

import { PokemonDetailComponent } from '../components/pokemon-detail/pokemon-detail.component';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    constructor(private pokeapiService: PokeapiService,
      private modalController: ModalController) {}

    async openPokemonDetail(pokemon: any) {
      const modal = await this.modalController.create({
        component: PokemonDetailComponent,
        componentProps: { pokemon },
      });
      await modal.present();
    }

}
