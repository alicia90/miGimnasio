import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import Socio from 'src/Socio';

@Injectable()
export class SocioService {
  socioList: Array<Socio> = [];
  doSomething(): Observable<Socio[]> {
    let socios = this.getPersonas();
    return of(socios);
  }
  private getPersonas(): Socio[] {
    return this.socioList;
  }

  public setPersona(
    _nombre: string,
    _apellidos: string,
    _num_socio: number,
    _dni: string,
    _telefono: string,
    _sexo: string
  ) {
    let socioObj: Socio = {
      nombre: _nombre,
      apellidos: _apellidos,
      num_socio: _num_socio,
      dni: _dni,
      telefono: _telefono,
      sexo: _sexo,
    };

    this.socioList.push(socioObj);

    return this.socioList;
  }

  public getSocio(num_socio: number): Socio | undefined {
    let socioModificar = this.socioList.find((x) => x.num_socio == num_socio);

    return socioModificar;
  }

  public editSocio(
    _num_socio: number,
    _nombre: string,
    _apellidos: string,
    _dni: string,
    _telefono: string,
    _sexo: string
  ) {
    let socioModificar = this.getSocio(_num_socio);
    if (socioModificar != undefined) {
      socioModificar.nombre = _nombre;
      socioModificar.apellidos = _apellidos;
      socioModificar.dni = _dni;
      socioModificar.telefono = _telefono;
      socioModificar.sexo = _sexo;

      const indexOfObject = this.socioList.findIndex((object) => {
        return object.num_socio === _num_socio;
      });

      this.socioList[indexOfObject] = socioModificar;
    }
  }

  public deleteSocio(num_socio: number) {
    const indexOfObject = this.socioList.findIndex((object) => {
      return object.num_socio === num_socio;
    });

    if (indexOfObject !== -1) {
      this.socioList.splice(indexOfObject, 1);
    }
  }

  public existeSocio(num_socio: number) : Boolean {
    let existe : Boolean = false;
    const indexOfObject = this.socioList.findIndex((object) => {
      return object.num_socio === num_socio;
    });

    if (indexOfObject !== -1) {
      existe = true;
    }

    return existe;
  }

  public getLastSocio() : Socio {
    return this.socioList[this.socioList.length - 1];
  }
}
