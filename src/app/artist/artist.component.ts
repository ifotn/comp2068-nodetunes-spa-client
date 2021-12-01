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
  _id: string | undefined
  title: string | undefined
  year: number | undefined
  rating: number | undefined

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
    this._id = undefined
    this.title = undefined
    this.year = undefined
    this.rating = undefined
  }

  selectArtist(_id: string, name: string) {
    // populate input form w/selected artist properties
    this._id = _id
    this.name = name
  }

  deleteArtist(_id: string): void {
    if (confirm('Are you sure?')) {
      this.service.deleteArtist(_id).subscribe(response => {
        this.getArtists()
        this.clearForm()
      })
    }
  }

  updateArtist() {
    // create new object populated from form values
    let artist = {
      _id: this._id,
      name: this.name
    }

    this.service.updateArtist(artist).subscribe(response => {
      this.getArtists()
      this.clearForm()
    })
  }

  //addAlbum(title: string, year: number, rating: number) {
  addAlbum() {
    let album = {
      title: this.title,
      year: this.year,
      rating: this.rating
    }

    this.service.addAlbum(<string>this._id, album).subscribe(response => {
      this.getArtists()
      this.clearForm()
    })
  }

}
