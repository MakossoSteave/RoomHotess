import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { BookingComponent } from './booking/booking.component';

export const routes: Routes = [
    {path : "" , component :HomePageComponent},
    {path : "login", component:LoginPageComponent },
    {path : "commentaire/:message", component:CommentaireComponent },
    {path : "home" , component :HomePageComponent},
    {path: "booking" , component: BookingComponent}
];
