# words

## Description

Nadie Sabe Nada es un programa de improvisación de Andreu Buenafuente y Berto Romero.
Emitido desde hace 7 años, han creado un mundo de secciones improvisadas con su propio lenguaje. 
Una de ella es el juego WORDS, donde Andreu Buenafuente propone una palabra y el interlocutor debe responder con otra que no esté vinculada a ésta directamente.

Andreu decide aleatoriamente la nota que merece.
En caso de haber una conexión adecuada, haces un perfect y a lo mejor te nombran caballero Words

## MVP (DOM - CANVAS)
Es una página web con 4 páginas.

>>Home

En la home encontraríamos la nav-bar con 4 páginas.

En ella hay la landing con una pequeña presentación, y una sección que te dirigiría a 8 momentos de NADIE SABE NADA (vincular imagen con un video de youtube si se puede)


>>Words | FAQ

En esta página encontraremos el juego.
Accederemos a la Api de random words, que simulará la palabra que lanza Andreu para jugar.

Le daremos al usuario tres respuestas para solucionar el juego.
Las tres palabras se obtendrán llamando a la Api de nuevo y se almacenarán en forma de botón, para que el usuario pueda seleccionar la respuesta que considere más correcta.
De manera aleatoria, podrás obtener tres resultados:
- un mensaje de “No hay nivel suficiente”, “Andreu considera que puedes mejorar” y finalmente “Enhorabuena, has hecho un perfect, consideraremos tu nombramiento para caballero Words”


>>Registro

En esta página el usuario se registrará para poder entrar en el sorteo de acceder como público a la grabación de un, o mejor dos, Nadie Sabe Nada.

Para ello necesitaremos;

Nombre y Apellidos
Email, repetir email
Fecha de nacimiento


>>Log In


## Backlog
Usar transiciones css y/o animaciones

## Data structure
Classes and methods definition.


## States y States Transitions
Definition of the different states and their transition (transition functions)



## Task
Crear  HTML
Crear CSS
Crear función para extraer las palabras de la API
Crear función que con las 3 posibles respuestas, al hacer onclick, te genere 3 diferentes respuestas.
Crear una clase constructora de User
Crear una clase constructora para Sign Up y funciones para tratar los mensajes de errores
Crear una clase constructora de Validator y sus funciones para validar la información
Crear función para el LogIn



## Links
[Link](https://random-word-api.herokuapp.com/)

### Trello
[Link url](https://trello.com/b/8bRR6XCA/proyecto-1)


### Git
[Link Deploy](https://nalonso404.github.io/words/index.html)


### Slides
URls for the project presentation (slides)
[Link Slides.com] (https://docs.google.com/presentation/d/1Xrpt4X_KkGPL-MP9yv2X2AqiYBgvPRWu6Z0w-fC3tSo/edit?usp=sharing)
