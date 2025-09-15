import {Producto, LIMITE_MATS} from './producto.js'
import {biblioteca, usuarios} from '../biblioteca.js'

export class Libro extends Producto{
    constructor(titulo, numEjemplares, autor){
        super(titulo, numEjemplares)
        this._titulo = titulo;
        this._numEjemplares = numEjemplares;
        this._autor = autor;
    }

    toString() {
        return `${this._titulo}, Autor: ${this._autor}, Ejemplares: ${this._numEjemplares}`;
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

    get autor() {
        return this._autor;
    }

    set autor(value) {
        this._autor = value;
    }

    // Listar todos los libros de la biblioteca
    getLibros(){
        biblioteca.libros.forEach(libro => {console.log(libro.toString())});
    }

    // Añadir libro a la biblioteca
    agregar(titulo, numEjemplares, autor) {
        let libro = new Libro(titulo, numEjemplares, autor);
        biblioteca.libros.push(libro);
    };

    // Prestar un libro a un socio
    prestar(titulo, dniSocio) {
        const libro = biblioteca.libros.find(libro => libro.titulo === titulo && libro.numEjemplares > 0);
        if (!libro) {
            console.log("Libro no disponible.");
            return false;
        }

        const socio = usuarios.socios.find(socio => socio.dni === dniSocio);
        if (!socio) {
            console.log("Socio no encontrado.");
            return false;
        }

        if (socio.matPrestados.length === LIMITE_MATS) {
            console.log("El socio ya tiene el máximo de materiales prestados.");
            return false;
        }

        libro.num_ejemplares -= 1;
        socio.matPrestados.push(libro.titulo);
        console.log(`Libro "${libro.titulo}" prestado a ${socio.nombre}.`);
        return true;
    }
}