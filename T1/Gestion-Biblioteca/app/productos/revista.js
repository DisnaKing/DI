import {Producto, LIMITE_MATS} from './producto.js'
import {biblioteca, usuarios} from '../biblioteca.js'


export class Revista extends Producto{
    constructor(titulo, numEjemplares, fechaPublicacion){
        super(titulo, numEjemplares)
        this._titulo = titulo;
        this._numEjemplares = numEjemplares;
        this._fechaPublicacion = fechaPublicacion;
    }

    toString() {
        return `${this._titulo}, Fecha de publicación: ${this._fechaPublicacion}, Ejemplares: ${this._numEjemplares}`;
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

    get fechaPublicacion() {
        return this._fechaPublicacion;
    }

    set fechaPublicacion(value) {
        this._fechaPublicacion = value;
    }

    // Listar todas las revistas de la biblioteca
    getRevistas(){
        biblioteca.revistas.forEach(revista => console.log(revista.toString()));
    }

    // Filtrar revistas por fecha de publicación
    filtrarRevistas(fechaPublicacion) {
        let revistaFiltrada = biblioteca.revistas.filter(revista => revista.fechaPublicacion === fechaPublicacion);
        revistaFiltrada.forEach(revista => console.log(revista.toString()));
    }

    // Añadir revista a la biblioteca
    agregar(titulo, numEjemplares, fechaPublicacion) {
        let revista = new Revista(titulo, numEjemplares, fechaPublicacion);
        biblioteca.revistas.push(revista);
    }
  
    // Prestar una revista a un socio
    prestar(titulo, dniSocio) {
        // Buscar el libro
        const revista = biblioteca.revistas.find(revista => revista.titulo === titulo && revista.numEjemplares > 0);
        if (!revista) {
            console.log("Revista no disponible.");
            return false;
        }

        // Buscar al socio
        const socio = usuarios.socios.find(socio => socio.dni === dniSocio);
        if (!socio) {
            console.log("Socio no encontrado.");
            return false;
        }

        // Límite de materiales prestados
        if (socio.matPrestados.length === LIMITE_MATS) {
            console.log("El socio ya tiene el máximo de materiales prestados.");
            return false;
        }

        // Prestar la revista
        revista.num_ejemplares -= 1;
        socio.matPrestados.push(revista.titulo);
        console.log(`Revista "${revista.titulo}" prestado a ${socio.nombre}.`);
        return true;
    }
}

