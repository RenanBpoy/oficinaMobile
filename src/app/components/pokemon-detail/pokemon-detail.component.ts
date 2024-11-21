import { Component, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent {

  @Input() pokemon: any;

  constructor(private modalController: ModalController) { }

  closeModal(){
    this.modalController.dismiss()
  }

}
