import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSService } from '../movie-s.service';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { response } from 'express';
import { ApiService } from '../api.service';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ CommonModule ,FormsModule 
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})


export class HomePageComponent implements OnInit {
yourModelName: any;
Avis :any ;
avis: any[] = [];

  constructor(private movieService : MovieSService , private route :Router , private AvisService : ApiService, private http: HttpClient){}
  

  title = 'room-hote'

  
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/api/avis/get').subscribe(data => {
      this.avis = data;  });}
  
   listMovie = this.movieService.getAllMovies();
   listGenre = this.movieService.getAllGenre()
  
   goMessage(message : string|undefined){
    if(message != undefined){
    this.route.navigate(['./commentaire/'+message])
    }
    
   }

}
