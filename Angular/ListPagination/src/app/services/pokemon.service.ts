import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../model/pokemonList.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getPokemonList(): Observable<PokemonListResponse>{
    return this.http.get<PokemonListResponse>(`https://pokeapi.co/api/v2/pokemon/`)
  }
}
