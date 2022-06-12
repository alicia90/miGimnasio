export default class Socio {
  nombre: String;
  apellidos: String;
  num_socio: number;
  dni: String;
  telefono: String;
  sexo: string;

  constructor(
    _nombre: string,
    _apellidos: string,
    _num_socio: number,
    _dni: string,
    _telefono: string,
    _sexo: string
  ) {
    this.nombre = _nombre;
    this.apellidos = _apellidos;
    this.num_socio = _num_socio;
    this.dni = _dni;
    this.telefono = _telefono;
    this.sexo = _sexo;
  }
}
