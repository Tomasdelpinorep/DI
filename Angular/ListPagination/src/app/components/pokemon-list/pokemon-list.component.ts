import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemonList.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  constructor(private pokemonService: PokemonService) { }
  pokemonList: Pokemon[] = [];

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(resp => {
      this.pokemonList = resp.results;
    })
  }
}
