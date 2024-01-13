import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { SistemacontrolService } from '../service/sistemacontrol.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SistemaControl } from '../modelo/SistemaControl';

@Component({
  selector: 'app-sistema-control',
  templateUrl: './sistema-control.component.html',
  styleUrls: ['./sistema-control.component.css']
})
export class SistemaControlComponent {
  title:string = "Control Accesos";

  titulo: String = 'Listado de Usuarios';
  listaSC: SistemaControl[] = [];

  constructor(
    private service:SistemacontrolService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.service.recuperarSistemasControl().subscribe((lista)=>(
      this.listaSC = lista
    ));
  }

  delete(id:number): void {
    Swal.fire({
      title: 'Estás seguro?',
      text: 'Esta acción no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borralo!!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminarSistemaControl(id);
        Swal.fire({
          title: 'Eliminado!',
          text: 'Ha sido eliminado',
          icon: 'success',
        });
      }
    });
  }
  
}
