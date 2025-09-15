import {Producto, LIMITE_MATS} from './producto.js'
import {biblioteca, usuarios} from '../biblioteca.js'

export class Pelicula extends Producto{
    constructor(titulo, numEjemplares, director, genero){
        super(titulo, numEjemplares)
        this._titulo = titulo;
        this._numEjemplares = numEjemplares;
        this._director = director;
        this._genero = genero;
    }

    toString() {
        return `${this._titulo}, Director: ${this._director}, Genero: ${this._genero}, Ejemplares: ${this._numEjemplares}`;
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

    get director() {
        return this._director;
    }

    set director(value) {
        this._director = value;
    }

    get genero() {
        return this._genero;
    }

    set genero(value) {
        this._genero = value;
    }

    // Listar todas las películas de la biblioteca
    getPeliculas(){
        biblioteca.peliculas.forEach( peli => console.log(peli.toString()));
    }

    // Filtrar películas por género
    filtrarPelicula(genero) {
        let peliculasFiltradas = biblioteca.peliculas.filter(peli => peli.genero === genero);
        peliculasFiltradas.forEach(peli => console.log(peli.toString()));
    }

    // Añadir película a la biblioteca
    agregar(titulo, numEjemplares, director, genero) {
        let pelicula = new Pelicula(titulo, numEjemplares, director, genero);
        biblioteca.peliculas.push(pelicula);
    }

    // Prestar una película a un socio
    prestar(titulo, dniSocio) {
        // Buscar la película
        const pelicula = biblioteca.peliculas.find(pelicula => pelicula.titulo === titulo && pelicula.numEjemplares > 0);
        if (!pelicula) {
            console.log("Película no disponible.");
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

        // Prestar el libro
        pelicula.numEjemplares -= 1;
        socio.matPrestados.push(pelicula.titulo);
        console.log(`Película "${pelicula.titulo}" prestado a ${socio.nombre}.`);
        return true;
    }
}

