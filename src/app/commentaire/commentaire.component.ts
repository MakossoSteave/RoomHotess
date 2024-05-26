import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-commentaire',
  standalone: true,
  imports: [],
  templateUrl: './commentaire.component.html',
  styleUrl: './commentaire.component.css'
})
export class CommentaireComponent implements OnInit {

  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {
    const messageValue = this.route.snapshot.paramMap.get('message')
    console.log(messageValue)
  }

}
