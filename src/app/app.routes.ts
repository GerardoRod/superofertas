import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    // cualquier  path vacio redirecciona al home.
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    // cualquier  otro path redirecciona al home por eso los **.

]