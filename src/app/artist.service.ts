import { Injectable } from '@angular/core';

// http refs to make calls to server api via http
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../environments/environment";

// create HttpHeader so we can send json objects as part of our http requests for POST / PUT / DELETE
let headers = new HttpHeaders()
headers.append('Content-Type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  apiServer: string = environment.apiServer

  // service instances require HttpClient dependency
  constructor(private http: HttpClient) { }

  // GET
  getArtists() {
    return this.http.get(this.apiServer + '/api/artists')
  }

  // POST
  addArtist(artist: any) {
    return this.http.post(this.apiServer + '/api/artists', artist, { headers: headers })
  }
}
