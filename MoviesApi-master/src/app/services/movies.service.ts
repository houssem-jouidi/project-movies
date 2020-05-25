import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getMovies(n):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/all/day?api_key=56772ffb3abeaa8a8e500ee8038f5291&page=${n}`)
  }
}
