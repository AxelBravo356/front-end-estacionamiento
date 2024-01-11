import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  titulo: String = 'Listado de Usuarios';

  delete(): void {
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
        Swal.fire({
          title: 'Eliminado!',
          text: 'Ha sido eliminado',
          icon: 'success',
        });
      }
    });
  }
}
