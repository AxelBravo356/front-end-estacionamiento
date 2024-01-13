import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css'],
})

export class RegistroUsuariosComponent implements OnInit {
  titulo: String = 'Registro de Usuario';
  usuario:Usuario = new Usuario();

  constructor(
    private service:UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.service
        .recuperarUsuario(id)
        .subscribe((elEvento) => (this.usuario = elEvento));
    });
  }

  registrar(): void{
    this.service.crearUsuario(this.usuario).subscribe((eventoCreado)=>{
      this.router.navigate(['/usuarios']);
    });
    Swal.fire(
      'Registrar evento',
      `${this.usuario.nombreUsuario} Se ha registrado correctamente.`,
      'success'
    );
  }

  actualizar(): void{
    this.service.actualizarUsuario(this.usuario).subscribe((eventoCreado)=>{
      this.router.navigate(['/usuarios']);
    });
    Swal.fire(
      'Registrar evento',
      `${this.usuario.nombreUsuario} Se ha actualizado correctamente.`,
      'success'
    );
  }

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
        this.service.eliminarUsuario(this.usuario.idUsuario);
        Swal.fire({
          title: 'Eliminado!',
          text: 'Ha sido eliminado',
          icon: 'success',
        });
      }
    });
  }

}
