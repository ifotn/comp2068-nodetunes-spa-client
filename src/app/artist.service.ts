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

  // DELETE
  deleteArtist(_id: string) {
    return this.http.delete(this.apiServer + '/api/artists/' + _id, { headers: headers })
  }

  // UPDATE
  updateArtist(artist: any) {
    return this.http.put(this.apiServer + '/api/artists/' + artist._id, artist, { headers: headers })
  }

  // ADD ALBUM TO ARTIST
  addAlbum(_id: string, album: any) {
    return this.http.post(this.apiServer + '/api/artists/add-album/' + _id, album, { headers: headers })
  }

}
