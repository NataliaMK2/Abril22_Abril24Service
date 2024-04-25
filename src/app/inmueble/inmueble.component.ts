import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Inmueble } from '../_modelo/inmueble';
import { SubInmuebleComponent } from '../sub-inmueble/sub-inmueble.component';
import { InmuebleService } from '../_servicio/inmueble.service';

@Component({
  selector: 'app-inmueble',
  standalone: true,
  imports: [RouterLink, SubInmuebleComponent],
  templateUrl: './inmueble.component.html',
  styleUrl: './inmueble.component.css'
})
export class InmuebleComponent implements OnInit {
  inmuebles: Inmueble[] = [];
  constructor(private inmuebleServicio: InmuebleService){
  }

  ngOnInit(): void {
    this.inmuebles = this.inmuebleServicio.obtenerTodos();
  }

}
