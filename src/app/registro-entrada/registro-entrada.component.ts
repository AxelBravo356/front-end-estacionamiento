import { Component } from '@angular/core';
import { EntradaService } from '../service/entrada.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrada } from '../modelo/Entrada';
import { SistemacontrolService } from '../service/sistemacontrol.service';
import { SistemaControl } from '../modelo/SistemaControl';
import { Moto } from '../modelo/Moto';
import { MotoService } from '../service/moto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-entrada',
  templateUrl: './registro-entrada.component.html',
  styleUrls: ['./registro-entrada.component.css'],
})
export class RegistroEntradaComponent {
  
  entrada:Entrada = new Entrada();

  sc: SistemaControl[] = [];
  motos: Moto[] = [];
  constructor(
    private service:EntradaService,
    private serviceSC:SistemacontrolService,
    private serviceMoto: MotoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  date1 = new Date();

  currentYear = this.date1.getFullYear();
  currentMonth = this.date1.getUTCMonth() + 1;
  currentDay = this.date1.getUTCDate();

  //YYYY - MM - DD
  TodayDate = '2024-01-11';
  FinalMonth: any;
  FinalDay: any;

  ngOnInit(): void {
    this.serviceSC.recuperarSistemasControl().subscribe((lista)=>(this.sc=lista));
    this.serviceMoto.recuperarMotos().subscribe((lista)=>(this.motos=lista));
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.service.recuperarEntrada(id).subscribe((ent)=>(this.entrada=ent));
    });
    
    if (this.currentMonth < 10) {
      this.FinalMonth = '0' + this.currentMonth;
    } else {
      this.FinalMonth = this.currentMonth;
    }
    if (this.currentDay < 10) {
      this.FinalDay = '0' + this.currentDay;
    } else {
      this.FinalDay = this.currentDay;
    }

    this.TodayDate =
      this.currentYear + '-' + this.FinalMonth + ' - ' + this.FinalDay;
  }


  registrar(): void{
    this.service.creaEntrada(this.entrada).subscribe((eventoCreado)=>{
      this.router.navigate(['/entradas']);
    });
    Swal.fire(
      'Registrar evento',
      `Moto con id ${this.entrada.idEntrada} Se ha registrado correctamente.`,
      'success'
    );
  }

  actualizar(): void{
    this.service.actualizarEntrada(this.entrada).subscribe((eventoCreado)=>{
      this.router.navigate(['/entradas']);
    });
    Swal.fire(
      'Registrar evento',
      `Moto con id ${this.entrada.idEntrada} Se ha actualizado correctamente.`,
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
        this.service.eliminarEntrada(this.entrada.idEntrada);
        Swal.fire({
          title: 'Eliminado!',
          text: 'Ha sido eliminado',
          icon: 'success',
        });
      }
    });
  }
}
