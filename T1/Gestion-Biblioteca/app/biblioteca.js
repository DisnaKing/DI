import { Revista } from "./productos/revista.js";
import { Libro } from "./productos/libro.js";
import { Pelicula } from "./productos/pelicula.js";
import { Socio } from "./usuarios/socio.js";
import { Administrador } from "./usuarios/administrador.js";

export let biblioteca = {
    revistas: [],
    peliculas: [],
    libros: []
};

export let usuarios = {
    socios: [],
    administradores: []
};

// Variables de entorno
let libro = new Libro()
let pelicula = new Pelicula()
let revista = new Revista()
let admin = new Administrador();
let socio = new Socio();

// Función para mostrar todos los productos de la biblioteca
function getBiblioteca(){
    console.log("Biblioteca:");
    libro.getLibros()
    console.log();
    pelicula.getPeliculas()
    console.log();
    revista.getRevistas()
}

// Libros
libro.agregar("Harry Potter y la piedra filosofal", 3, "J.K. Rowling");
libro.agregar("El nombre de la rosa", 4, "Umberto Eco");

// Películas
pelicula.agregar("Inception", 2, "Christopher Nolan", "Ciencia ficción");
pelicula.agregar("Interstellar", 3, "Christopher Nolan", "Ciencia ficción");
pelicula.agregar("Titanic", 5, "James Cameron", "Romance");

// Revistas
revista.agregar("National Geographic", 6, "01-09-2025");
revista.agregar("Scientific American", 7, "10-07-2025");
revista.agregar("Time Magazine", 5, "25-08-2025");

// Administradores
admin.registrar("Ana López", "12345678A", "Administrador");
admin.registrar("Carlos Ruiz", "87654321B", "Ayudante");

// Socios
socio.registrar("María Gómez", "11223344C", []);
socio.registrar("Carlos Martínez", "69696969M", []);

// Préstamos
revista.prestar("National Geographic", "11223344C");
revista.prestar("National", "11223344C");
revista.prestar("National Geographic", "11323344C");
pelicula.prestar("Inception", "11223344C");
libro.prestar("Harry Potter y la piedra filosofal", "11223344C")
pelicula.prestar("Interstellar", "11223344C");

// // console.log(usuarios.socios)
console.log()
getBiblioteca()

console.log();

pelicula.filtrarPelicula("Ciencia ficción");
revista.filtrarRevistas("01-09-2025")
/**
Retornar un llibre.

Mostrar una llista de tots els recursos, amb la possibilitat de filtrar per tipus. En el cas de pel·lícules s'haurà de filtrar també per gènere. En el cas de revista per any de publicació.

Mostrar una llista de tots els socis.

Mostrar una llista de tots els administradors de préstecs.

Mostrar una llista amb la informació sobre quins recursos estan prestats a cada soci.
*/
