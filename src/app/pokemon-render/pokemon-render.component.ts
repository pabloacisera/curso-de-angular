import { Component, OnInit } from '@angular/core';
import { ServicePokemonService, Character } from '../service-pokemon.service';

@Component({
  selector: 'app-pokemon-render',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-render.component.html',
  styleUrl: './pokemon-render.component.css'
})
export class PokemonRenderComponent implements OnInit {
  characters: Character[]=[];
  constructor(private pokemonService: ServicePokemonService){}

  ngOnInit(): void {
    this.pokemonService.getCharacters().subscribe(
      (character)=>{
        this.characters = character;
      },
      (error)=>{
        console.error('Errors fetching characters', error)
      }
    )
  }
}
