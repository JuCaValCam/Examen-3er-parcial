import { Component } from '@angular/core';
import { JuegoService } from '../servicios/juego.service';
import { ButtonDirective, ListGroupDirective, 
          ListGroupItemDirective,
          RowComponent, ColComponent,
          CardComponent, CardHeaderComponent, CardBodyComponent,
          FormDirective, FormLabelDirective, FormControlDirective } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { JuegoModel } from '../model/juego.model';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [ListGroupDirective, 
    ListGroupItemDirective, 
    ButtonDirective,
    RowComponent, ColComponent,
    CardComponent, CardHeaderComponent, CardBodyComponent,
    FormsModule, FormDirective, FormLabelDirective, FormControlDirective,
  ],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.scss'

})

export class JuegoComponent {
  listaJuegos : any[] = [];
  juego: JuegoModel;
  constructor(private juegoServicios : JuegoService) {
    this.juego = new JuegoModel;

  }

  ngOnInit(){
    this.getJuegos();
}

getJuegos(){
  this.juegoServicios.getTodosJuegos().subscribe(
    (data) => {
      this.listaJuegos = data;
      console.log(this.listaJuegos);
    },
    (error) => console.log(error)
  );
}

getJuegosPorPrecio(){
    this.juegoServicios.getOrdenarJuegosPorPrecioas().subscribe(
      (data) => {
        this.listaJuegos = data;
        console.log(this.listaJuegos);
      },
      (error) => console.log(error)
    );
  }
//  getRango200-500((){
//    this.juegoServicios.getMostrar200-500().subscribe(
//     (data) => {
//        this.listaJuegos = data;
//        console.log(this.listaJuegos);
//      },
//      (error) => console.log(error)
//    );
//  }
  agregarJuego(){
    console.log(this.juego);
    if (this.juego._id == null || this.juego._id == ''){
        //agregar
        this.juegoServicios.agregarJuego(this.juego).subscribe(
          (data: JuegoModel) => {
            console.log("Juego agregado:", data);
            this.getJuegos();
          },
          (error) => console.log(error)
        );
  } else {
    this.juegoServicios.editarJuego(this.juego._id,this.juego).subscribe(
      (data: JuegoModel) => {
        console.log("Juego editado:", data);
        this.getJuegos();
      },
      (error) => console.log(error)
    );
  }
   //editar
}
   editarJuego(item : JuegoModel){
    console.log(item);
    this.juego = item;
  }
  eliminarJuego(item : JuegoModel){
    this.juegoServicios.eliminarJuego(item._id).subscribe(
      (data: JuegoModel) => {
        console.log("Tarea eliminado:", data);
        this.getJuegos();
      },
      (error) => console.log(error)
    );
  }
}
