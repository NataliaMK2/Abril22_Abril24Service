import { Routes } from '@angular/router';
import { SubInmuebleComponent } from './sub-inmueble/sub-inmueble.component';
import { InmuebleComponent } from './inmueble/inmueble.component';

export const routes: Routes = [
    {path: "Inicio", component: InmuebleComponent},
    {path: "inmueble/:id", component: SubInmuebleComponent},
    {path: "", redirectTo:'/Inicio', pathMatch: "full"},
];
