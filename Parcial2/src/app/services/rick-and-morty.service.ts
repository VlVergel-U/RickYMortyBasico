import { Injectable } from '@angular/core';
import { apiResults } from '../interfaces/character-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  getCharacterList(): Observable<apiResults>{
    return this.http.get<apiResults>(`https://rickandmortyapi.com/api/character`)
  }

}
