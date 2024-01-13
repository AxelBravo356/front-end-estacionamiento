import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../modelo/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  
  titulo: String = 'Listado de Usuarios';
  listaUsuarios: Usuario[] = [];

  constructor(
    private service:UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.service.recuperarUsuarios().subscribe((lista)=>(
      this.listaUsuarios = lista
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
        this.service.eliminarUsuario(id);
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
