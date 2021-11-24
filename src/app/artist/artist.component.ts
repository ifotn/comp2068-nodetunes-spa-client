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

}
