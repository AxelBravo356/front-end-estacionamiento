import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { SistemaControl } from '../modelo/SistemaControl';
import { SistemacontrolService } from '../service/sistemacontrol.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro-sc',
  templateUrl: './registro-sc.component.html',
  styleUrls: ['./registro-sc.component.css']
})
export class RegistroScComponent {
  titulo: String = 'Registro de Sistema de Control';

  sc:SistemaControl = new SistemaControl();

  constructor(
    private service:SistemacontrolService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.service
        .recuperarSistemaControl(id)
        .subscribe((elEvento) => (this.sc = elEvento));
    });
  }

  registrar(): void{
    this.service.crearSistemaControl(this.sc).subscribe((eventoCreado)=>{
      this.router.navigate(['/sistema-control']);
    });
    Swal.fire(
      'Registrar evento',
      `Control ${this.sc.acceso} Se ha registrado correctamente.`,
      'success'
    );
  }

  actualizar(): void{
    this.service.actualizarSistemaControl(this.sc).subscribe((eventoCreado)=>{
      this.router.navigate(['/sistema-control']);
    });
    Swal.fire(
      'Registrar evento',
      `Control ${this.sc.acceso} Se ha actualizado correctamente.`,
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
        this.service.eliminarSistemaControl(this.sc.idSistemaControl);
        Swal.fire({
          title: 'Eliminado!',
          text: 'Ha sido eliminado',
          icon: 'success',
        });
      }
    });
  }
}
