export class Usuario {
    constructor(nombre, dni) {
        if (new.target === Usuario) {
            throw new TypeError("No se puede instanciar una clase abstracta.");
        }
        this._nombre = nombre;
        this._dni = dni;
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

    registrar() {
        throw new Error("Este método debe ser sobrescrito en las subclases.");
    }
}