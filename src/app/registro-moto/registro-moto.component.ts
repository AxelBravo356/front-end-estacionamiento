import { Component } from '@angular/core';
import { MotoService } from '../service/moto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Moto } from '../modelo/Moto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-moto',
  templateUrl: './registro-moto.component.html',
  styleUrls: ['./registro-moto.component.css'],
})
export class RegistroMotoComponent {
  titulo: String = 'Registro de Moto';

  moto:Moto = new Moto();

  constructor(
    private service:MotoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.service
        .recuperarMoto(id)
        .subscribe((elEvento) => (this.moto = elEvento));
    });
  }

  registrar(): void{
    this.service.crearMoto(this.moto).subscribe((eventoCreado)=>{
      this.router.navigate(['/motos']);
    });
    Swal.fire(
      'Registrar evento',
      `Moto con id ${this.moto.idMoto} Se ha registrado correctamente.`,
      'success'
    );
  }

  actualizar(): void{
    this.service.actualizarMoto(this.moto).subscribe((eventoCreado)=>{
      this.router.navigate(['/motos']);
    });
    Swal.fire(
      'Registrar evento',
      `Moto con id ${this.moto.idMoto} Se ha actualizado correctamente.`,
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
        this.service.eliminarMoto(this.moto.idMoto);
        Swal.fire({
          title: 'Eliminado!',
          text: 'Ha sido eliminado',
          icon: 'success',
        });
      }
    });
  }
}
