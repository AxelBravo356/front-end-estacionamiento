import { Component, OnInit } from '@angular/core';
import { EntradaService } from '../service/entrada.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrada } from '../modelo/Entrada';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css'],
})
export class EntradaComponent implements OnInit {
  title:string = "Entradas";

  listaEntradas: Entrada[] = [];
  constructor(
    private service:EntradaService,
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
    
      this.service.recuperarEntradas().subscribe((lista)=>(
        this.listaEntradas = lista
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
        this.service.eliminarEntrada(id);
        Swal.fire({
          title: 'Eliminado!',
          text: 'Ha sido eliminado',
          icon: 'success',
        });
      }
    });
  }
}
