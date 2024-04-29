import { Component } from '@angular/core';
import { TareaService } from '../servicios/tarea.service';
import { ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [ListGroupDirective, ListGroupItemDirective],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.scss'

})

export class TareaComponent {
  listaTareas : any[] = [];
  constructor(private tareaServicios : TareaService) {

  }

  ngOnInit(){
    this.getTareas();
  }

  getTareas(){
    this.tareaServicios.getTodasTareas().subscribe(
      (data) => {
        this.listaTareas = data;
        console.log(this.listaTareas);
      },
      (error) => console.log(error)
    );
  }

  getTareasPorPrioridad(){
    this.tareaServicios.getOrdenarTaresPorPrioridad().subscribe(
      (data) => {
        this.listaTareas = data;
        console.log(this.listaTareas);
      },
      (error) => console.log(error)
    );
  }
}
  