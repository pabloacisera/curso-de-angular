import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

// Interfaz para la información general
export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicePokemonService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('https://rickandmortyapi.com/api/character/?page=19');
  }
}
