import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocioService } from '../socio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-socio-edit',
  templateUrl: './socio-edit.component.html',
  styleUrls: ['./socio-edit.component.css'],
})
export class SocioEditComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private myServiceSocio: SocioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      num_socio: [null, [Validators.nullValidator]],
      nombre: [null, [Validators.minLength(3)]],
      apellidos: [null, [Validators.minLength(3)]],
      dni: [null, [Validators.minLength(9), Validators.maxLength(9)]],
      telefono: [null, [Validators.nullValidator]],
      sexo: [null, [Validators.nullValidator]],
    });
  }

  public saveSocio() {
    console.log(this.form);
    const num_socio = this.form.value.num_socio;
    const nombre = this.form.value.nombre;
    const apellidos = this.form.value.apellidos;
    const dni = this.form.value.dni;
    const telefono = this.form.value.telefono;
    const sexo = this.form.value.sexo;

    this.myServiceSocio.editSocio(
      num_socio,
      nombre,
      apellidos,
      dni,
      telefono,
      sexo
    );

    this.router.navigate(['socios']);
  }

  public editarSocio(num_socio: number) {
    let socioModificar = this.myServiceSocio.getSocio(num_socio);
    if (socioModificar != undefined) {
      this.form.controls['num_socio'].setValue(socioModificar.num_socio);
      this.form.controls['nombre'].setValue(socioModificar.nombre);
      this.form.controls['apellidos'].setValue(socioModificar.apellidos);
      this.form.controls['dni'].setValue(socioModificar.dni);
      this.form.controls['telefono'].setValue(socioModificar.telefono);
      this.form.controls['sexo'].setValue(socioModificar.sexo);
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.editarSocio(params['num_socio']);
    });
  }
}
