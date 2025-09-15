import {Usuario} from './usuario.js' 
import {usuarios} from '../biblioteca.js'

export class Socio extends Usuario{
    constructor(nombre, dni, matPrestados){
        super(nombre, dni)
        this._nombre = nombre;
        this._dni = dni;
        this._matPrestados = matPrestados;
    }

    toString() {
        let info = `Nombre: ${this._nombre}, DNI: ${this._dni}`;
        if (this._matPrestados && this._matPrestados.length > 0) {
            info += `, Materiales prestados: ${this._matPrestados.join(", ")}`;
        }
        return info;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get dni() {
        return this._dni;
    }

    set dni(value) {
        this._dni = value;
    }

    get matPrestados() {
        return this._matPrestados;
    }

    set matPrestados(value) {
        this._matPrestados = value;
    }

    // Listar todos los socios de la biblioteca
    getSocios(){
        usuarios.socios.forEach(socio => {console.log(socio.toString())});
    }

    // Registrar un nuevo socio
    registrar(nombre, dni, matPrestados){
        let socio = new Socio(nombre, dni, matPrestados);
        usuarios.socios.push(socio);
    };

}