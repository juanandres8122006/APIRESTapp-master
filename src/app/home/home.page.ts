import { PokeapiService } from './../Services/apiservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemon:any ;
  name = ""
  constructor(private api: PokeapiService) {}
  getPokemonData(name: string) {
  try {
    this.api.getPokemonName(name).subscribe((response => {
      this.pokemon = response;
      console.log(this.pokemon)
    }));
    } catch (error) {
      console.log(error);
    }
  }

  pokemon2:any ;
  name2 = ""
  getPokemonData2(name2: string) {
  try {
    this.api.getPokemonName(name2).subscribe((response => {
      this.pokemon2 = response;
      console.log(this.pokemon2)
    }));
    } catch (error) {
      console.log(error);
    }
  }

  item:any ;
  nameItem = ""
  getPokemonData3(nameItem: string) {
  try {
    this.api.getItemName(nameItem).subscribe((response => {
      this.item = response;
      console.log(this.item)
    }));
    } catch (error) {
      console.log(error);
    }
  }

  item2:any ;
  nameItem2 = ""
  getPokemonData4(nameItem2: string) {
  try {
    this.api.getItemName(nameItem2).subscribe((response => {
      this.item2 = response;
      console.log(this.item2)
    }));
    } catch (error) {
      console.log(error);
    }
  }
}