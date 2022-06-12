import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocioService } from '../socio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socio-create',
  templateUrl: './socio-create.component.html',
  styleUrls: ['./socio-create.component.css'],
})
export class SocioCreateComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private myServiceSocio: SocioService,
    private router: Router
  ) {
    this.createForm();

  }

  createForm() {
    this.form = this.fb.group({
      nombre: [null, [Validators.minLength(3)]],
      apellidos: [null, [Validators.minLength(3)]],
      dni: [null, [Validators.minLength(9), Validators.maxLength(9)]],
      telefono: [null, [Validators.nullValidator]],
      sexo: [null, [Validators.nullValidator]],
    });
  }

  public addSocio() {
    console.log(this.form);
    const nombre = this.form.value.nombre;
    const apellidos = this.form.value.apellidos;
    const dni = this.form.value.dni;
    const telefono = this.form.value.telefono;
    const sexo = this.form.value.sexo;
    const num_socio = this.getNumSocio();
    this.myServiceSocio.setPersona(
      nombre,
      apellidos,
      num_socio,
      dni,
      telefono,
      sexo
    );
    this.router.navigate(['socios']);
  }

  getNumSocio(): number {
    let num_socio: number = 1;
    num_socio +=
      this.myServiceSocio.getLastSocio() == null
        ? 0
        : this.myServiceSocio.getLastSocio().num_socio;
    return num_socio;
  }

  ngOnInit(): void {}
}
