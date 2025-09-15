export class Producto {

    constructor(titulo, numEjemplares) {
        if (new.target === Producto) {
        throw new TypeError("No se puede instanciar una clase abstracta.");
        }
        this._titulo = titulo;
        this._numEjemplares = numEjemplares;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(value) {
        this._titulo = value;
    }

    get numEjemplares() {
        return this._numEjemplares;
    }

    set numEjemplares(value) {
        this._numEjemplares = value;
    }

    agregar() {
        throw new Error("Este método debe ser sobrescrito en las subclases.");
    }

    prestar() {
        throw new Error("Este método debe ser sobrescrito en las subclases.");
    }
}

// Límite de productos prestados que puede tener un socio
export const LIMITE_MATS = 3;


