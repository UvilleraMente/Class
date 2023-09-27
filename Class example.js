class Autor {
  constructor(nombre, nacionalidad, fechaNacimiento) {
    this.nombre = nombre;
    this.nacionalidad = nacionalidad;
    this.fechaNacimiento = fechaNacimiento;
  }

  static crearAutor(nombre, nacionalidad, fechaNacimiento) {
    return new Autor(nombre, nacionalidad, fechaNacimiento);
  }
}

const EstadoLibro = {
  DISPONIBLE: "Disponible",
  PRESTADO: "Prestado",
  EN_REPARACIÓN: "En Reparación",
};

class Libro {
  constructor(título, editorial, año, ISBN, autor) {
    this.título = título;
    this.editorial = editorial;
    this.año = año;
    this.ISBN = ISBN;
    this.autor = autor;
    this.estado = EstadoLibro.DISPONIBLE;
    this.usuarioPrestamo = null;
    this.fechaPrestamo = null;
  }

  prestarLibro(usuario, fechaPrestamo) {
    if (this.estado === EstadoLibro.DISPONIBLE) {
      this.estado = EstadoLibro.PRESTADO;
      this.usuarioPrestamo = usuario;
      this.fechaPrestamo = fechaPrestamo;
      console.log(
        `El libro "${this.título}" ha sido prestado a ${usuario} el ${fechaPrestamo}.`
      );
    } else {
      console.log(
        `El libro "${this.título}" no está disponible para préstamo.`
      );
    }
  }

  devolverLibro() {
    if (this.estado === EstadoLibro.PRESTADO) {
      this.estado = EstadoLibro.DISPONIBLE;
      this.usuarioPrestamo = null;
      this.fechaPrestamo = null;
      console.log(`El libro "${this.título}" ha sido devuelto.`);
    } else {
      console.log(
        `El libro "${this.título}" no se puede devolver en este momento.`
      );
    }
  }

  obtenerInformacionLibro() {
    console.log("Información del Libro:");
    console.log(`Título: ${this.título}`);
    console.log(`Editorial: ${this.editorial}`);
    console.log(`Año de Publicación: ${this.año}`);
    console.log(`ISBN: ${this.ISBN}`);
    console.log(`Estado: ${this.estado}`);
    console.log("\n" + "Información del Autor:");
    console.log(`Nombre del Autor: ${this.autor.nombre}`);
    console.log(`Nacionalidad del Autor: ${this.autor.nacionalidad}`);
    console.log(`Fecha de Nacimiento del Autor: ${this.autor.fechaNacimiento}`);
  }
}

// Crear un autor
const autor1 = Autor.crearAutor(
  "J.R.R. Tolkien",
  "Inglés",
  "03 de enero de 1892"
);

// Crear un libro relacionado con el autor
const libro1 = new Libro(
  "El Señor de los Anillos",
  "HarperCollins",
  1954,
  "978-0261102385",
  autor1
);

console.log(
  "**Estado actual del libro " +
    "'" +
    libro1.título +
    "'" +
    ": " +
    libro1.estado +
    "\n"
);

// Prestar el libro a un usuario
libro1.prestarLibro("Usuario123", "2023-10-15");
console.log("**Estado actual del libro: " + libro1.estado + "\n");

// Devolver el libro
libro1.devolverLibro();
console.log("**Estado actual del libro: " + libro1.estado + "\n");

// Obtener información completa del libro
libro1.obtenerInformacionLibro();
