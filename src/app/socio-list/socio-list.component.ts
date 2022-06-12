import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import Socio from '../../Socio';
import { Router } from '@angular/router';

import { SocioService } from '../socio.service';

@Component({
  selector: 'app-socio-list',
  templateUrl: './socio-list.component.html',
  styleUrls: ['./socio-list.component.css'],
})
export class SocioListComponent implements OnInit {
  public displayedColumns = [
    'num_socio',
    'nombre',
    'apellidos',
    'dni',
    'telefono',
    'sexo',
    'editar',
    'eliminar',
  ];
  dataSource = new MatTableDataSource<Socio>([]);
  constructor(private mySocioService: SocioService, private router: Router) {}

  ngOnInit() {
   this.refresh();
  }

  refresh() {
    this.mySocioService.doSomething().subscribe((data: Socio[]) => {
      this.dataSource.data = data;
    });
  }

  editarSocio(num_socio: number) {
    this.router.navigateByUrl('socio/edit/' + num_socio);
  };

  eliminarSocio(num_socio: number) {
    this.mySocioService.deleteSocio(num_socio);
    this.refresh();
  };
}
