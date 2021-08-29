import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }
  apiCall() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=0e53893601f4571b5f08dafad21f6272');
    
  }
}
