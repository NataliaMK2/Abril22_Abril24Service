import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InmuebleComponent } from './inmueble/inmueble.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InmuebleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril22_Abril24Service';
}
