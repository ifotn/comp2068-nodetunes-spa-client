import { Component, OnInit } from '@angular/core';

// ref service that interfaces w/server api
import { ArtistService } from "../artist.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artists: any
  name: string | undefined

  constructor(private service: ArtistService) { }

  ngOnInit(): void {
    this.getArtists()
  }

  getArtists(): void {
    // call service which in turn calls server api to fetch artist data
    this.service.getArtists().subscribe(artists => {
      this.artists = artists
    })
  }

  addArtist(): void {
    // create & populate new artist object
    let artist = {
      name: this.name
    }

    // call the service and pass the new object to be saved
    this.service.addArtist(artist).subscribe(artist => {
      // refresh the list
      this.getArtists()
      // clear the form
      this.clearForm()
    })
  }

  clearForm(): void {
    this.name = undefined
  }

}
