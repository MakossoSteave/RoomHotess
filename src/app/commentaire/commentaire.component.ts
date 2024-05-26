import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-commentaire',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './commentaire.component.html',
  styleUrl: './commentaire.component.css'
})
export class CommentaireComponent implements OnInit {

loginForm: any;
satisfait: boolean | undefined;
enum :string[] | undefined;
messageValue: any;


  msg : string = ''
  body : any;
  constructor(private route : ActivatedRoute,  private http: HttpClient, private router :Router){}

  ngOnInit(): void {
    this.messageValue = this.route.snapshot.paramMap.get('message')
    console.log(this.messageValue)
    if(this.messageValue!= null){
       this.msg = this.messageValue
       this.enum = ["satisfait"]
    }else[
      console.log('la valeur recuperé est invalide')
    ]
   
  }
  onSubmit(form: NgForm) {
    console.log(form.value['message']);
    
    if(form.value['type'] = true){
      this.msg = "satisfait"
    }else{
      this.msg = "pas satisfait"
    }
    
     this.body = { message: form.value['message'],status :this.msg,film : this.messageValue};
     this.http.post<any[]>('http://localhost:8080/api/avis/add',this.body).subscribe(data =>{this.body = data})

     this.router.navigate(['/home'])
  }


}
