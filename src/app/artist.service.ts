import { Injectable } from '@angular/core';

// http refs to make calls to server api via http
import { HttpClient } from "@angular/common/http";

import { environment } from "../environments/environment";

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
}
