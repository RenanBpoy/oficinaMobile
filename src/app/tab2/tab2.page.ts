import { Component } from '@angular/core';

import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private pokeapiService: PokeapiService) {}

}
