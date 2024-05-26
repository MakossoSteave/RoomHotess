import { Injectable } from '@angular/core';
import { movie } from './movies';
import { movieList } from './mock-movie-list';

@Injectable({
  providedIn: 'root'
})
export class MovieSService {
  
  listMovie:movie[]=movieList
  listGenre:string[]|undefined


  getAllMovies(): movie []{
    return this.listMovie ;
  }

  getAllGenre(){
   let genre = movieList.map(movie => movie.genres).flat();
   const uniqueArray = genre.filter((item, index) => genre.indexOf(item) === index);
    return uniqueArray
  }

  getByGenre(genre :string){
  }
}
