# main.py

import random

def obtener_inspiracion():
    frases_inspiradoras = [
        "La creatividad es la inteligencia divirtiéndose.",
        "El único modo de hacer un gran trabajo es amar lo que haces.",
        "La programación es el arte de organizar y dirigir a los hombres de manera que cooperen armoniosamente en el logro de un objetivo común.",
        "No tienes que ser genial para comenzar, pero tienes que comenzar para ser genial.",
        "La innovación distingue a un líder de un seguidor.",
        # Agrega más frases inspiradoras según tus preferencias
    ]
    return random.choice(frases_inspiradoras)

def main():
    print("¡Bienvenido a Inspiración Developer!")
    
    # Agrega aquí la lógica principal de tu aplicación
    
    # Ejemplo: Imprimir una frase inspiradora
    inspiracion = obtener_inspiracion()
    print("Inspiración del día:")
    print(inspiracion)

if __name__ == "__main__":
    main()