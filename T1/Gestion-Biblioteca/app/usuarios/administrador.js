import {Usuario} from './usuario.js' 
import {usuarios} from '../biblioteca.js'

export class Administrador extends Usuario{
    constructor(nombre, dni, cargo){
        super(nombre, dni)
        this._nombre = nombre;
        this._dni = dni;
        this._cargo = cargo;
    }

    toString() {
        return `Nombre: ${this._nombre}, DNI: ${this._dni}, Cargo: ${this._cargo}`;
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

    get cargo() {
        return this._cargo;
    }

    set cargo(value) {
        this._cargo = value;
    }

    // Listar todos los administradores de la biblioteca
    getAdmins(){
        usuarios.administradores.forEach(admin => {console.log(admin.toString())});
    }

    // Registrar un nuevo administrador
    registrar(nombre, dni, cargo){
        if (cargo !== CARGO.ADMINISTRADOR && cargo !== CARGO.AYUDANTE) {
            throw new Error("Cargo inválido. Debe ser 'Administrador' o 'Ayudante'.");
        }
        
        let admin = new Administrador(nombre, dni, cargo);
        usuarios.administradores.push(admin);
    };
}

// Constantes para los cargos de los administradores
export const CARGO = {
    ADMINISTRADOR: 'Administrador',
    AYUDANTE: 'Ayudante'
};

