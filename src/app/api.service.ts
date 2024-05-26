import { Injectable } from '@angular/core';
import { environment } from '../environements/environement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  data:any;
  test:Iterable<any> | null | undefined ;
  getAvis() {
   fetch(`${this.apiUrl}/avis/get`)
   .then(response => {
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return response.json(); 
   })
   .then(jsonData => {
     this.test = jsonData; 
     console.log("fact")
    console.log(this.test)
    console.log("fact1")
    return this.test
    
   })
   .catch(error => {
     console.error('There was a problem with the fetch operation:', error);
   });
   console.log("nj")
   console.log(this.test)
   console.log("j'y suis")
   return this.test;
  }
}
