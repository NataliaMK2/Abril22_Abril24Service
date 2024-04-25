import { Component, Input } from '@angular/core';
import { Inmueble } from '../_modelo/inmueble';
import { InmuebleService } from '../_servicio/inmueble.service';

@Component({
  selector: 'app-sub-inmueble',
  standalone: true,
  imports: [],
  templateUrl: './sub-inmueble.component.html',
  styleUrl: './sub-inmueble.component.css'
})
export class SubInmuebleComponent {

  inmueble: Inmueble| undefined;
  @Input()
  id: string="1";

  constructor(private inmuebleServicio: InmuebleService){
  }
  ngOnInit(): void {
    this.inmueble = this.inmuebleServicio.obtenerUno(this.id);
  }
}
