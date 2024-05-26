import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CommentaireComponent } from './commentaire/commentaire.component';

export const routes: Routes = [
    {path : "" , component :HomePageComponent},
    {path : "login", component:LoginPageComponent },
    {path : "commentaire/:message", component:CommentaireComponent }
];
