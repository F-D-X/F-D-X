 index.js

console.log("¡Bienvenido a Inspiración Developer!");

// Agrega aquí la lógica principal de tu aplicación

// Ejemplo: Obtener inspiración
function obtenerInspiracion() {
    const frasesInspiradoras = [
        "La creatividad es la inteligencia divirtiéndose.",
        "El único modo de hacer un gran trabajo es amar lo que haces.",
        "La programación es el arte de organizar y dirigir a los hombres de manera que cooperen armoniosamente en el logro de un objetivo común.",
        "No tienes que ser genial para comenzar, pero tienes que comenzar para ser genial.",
        "La innovación distingue a un líder de un seguidor.",
        // Agrega más frases inspiradoras según tus preferencias
    ];
    return frasesInspiradoras[Math.floor(Math.random() * frasesInspiradoras.length)];
}

// Ejemplo: Imprimir inspiración en la consola
const inspiracion = obtenerInspiracion();
console.log("Inspiración del día:");
console.log(inspiracion);

// Agrega más lógica según tus necesidades