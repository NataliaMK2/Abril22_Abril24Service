import { Injectable } from '@angular/core';
import { Inmueble } from '../_modelo/inmueble';


@Injectable({
  providedIn: 'root'
})
export class InmuebleService {


    inmuebles: Inmueble[] = [
    { id: "1", titulo: "Chalet en la nieve", info: 'Un chalet en la nieve es una visión de ensueño. Imagina una cabaña de madera robusta y acogedora, anclada firmemente en un paisaje blanco inmaculado. El techo inclinado del chalet está cubierto con una gruesa capa de nieve fresca y brillante que refleja la luz del sol, creando un espectáculo deslumbrante.', imagen: "https://hunterchalets.com/wp-content/uploads/2017/07/ch46-1.jpg" },
    { id: "2", titulo: "Chalet en el monte", info: 'Un chalet en la nieve es una visión de ensueño. Imagina una cabaña de madera robusta y acogedora, anclada firmemente en un paisaje blanco inmaculado. El techo inclinado del chalet está cubierto con una gruesa capa de nieve fresca y brillante que refleja la luz del sol, creando un espectáculo deslumbrante.', imagen: "https://th.bing.com/th/id/OIP.2zA72IxSMXkEVmph0k5EQAHaFr?rs=1&pid=ImgDetMain" },
    { id: "3", titulo: "Chalet en el campo", info: 'Un chalet en la nieve es una visión de ensueño. Imagina una cabaña de madera robusta y acogedora, anclada firmemente en un paisaje blanco inmaculado. El techo inclinado del chalet está cubierto con una gruesa capa de nieve fresca y brillante que refleja la luz del sol, creando un espectáculo deslumbrante.', imagen: "https://i.pinimg.com/originals/bb/b9/97/bbb9973ed2f3fd5ca8253fca4c90e661.jpg" }
  ]
  obtenerUno(id: string): Inmueble | undefined {
    return this.inmuebles.find(inmueble => inmueble.id === id);

  }

  obtenerTodos(): Inmueble[]{
    return this.inmuebles;
  }
}
