import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Moto } from '../modelo/Moto';
import { MotoService } from '../service/moto.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css']
})
export class MotosComponent implements OnInit{
  titulo: String = 'Listado de Motos';

  listaMotos: Moto[] = [];

  constructor(
    private service:MotoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.service.recuperarMotos().subscribe((lista)=>(
      this.listaMotos = lista
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
        this.service.eliminarMoto(id);
        Swal.fire({
          title: 'Eliminado!',
          text: 'Ha sido eliminado',
          icon: 'success',
        });
      }
    });
  }

  descargarPDF() {
    this.service.getPDF().subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        // Puedes usar esta URL para abrir el PDF en una nueva pestaña o descargarlo
        window.open(url);
      },
      (error) => {
        console.error('Error al obtener el archivo PDF', error);
      }
    );
  }
}


