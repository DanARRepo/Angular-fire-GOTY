import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { catchError, of, tap } from 'rxjs';

const base_url = (environment.production) ? environment.prod_url : environment.dev_url;

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games:Game[] = [];

  constructor( private http:HttpClient) { }

  getNominees() {
    if ( this.games.length > 0 ) {
      console.log('from cache');
      
      return of(this.games);
    } else {
      console.log('from internet');
      return this.http.get<Game[]>(`${base_url}/goty`).pipe(
        tap( (games) => this.games = games )
      );
    }
  }

  voteGame(id:string) {
    return this.http.post(`${base_url}/goty/${id}`,{}).pipe(
      catchError( (err => of(err.error)) )
    );
  }
}
