![presentacion](https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/ambiente%2Fpresentacion-readme.png?alt=media&token=78ac712d-13ab-4498-956b-3b9a7fb75a71 "Vista de presentacion de readme")

[Puedes ingresar AUFIELDS CHILE 2021](https://proyecto-final-1-afa97.web.app/)

# AUFIELDS APP

##### El concierto más grande del pacífico sur de música electrónica.- Aufields CHILE 2021

> Aufields, es una aplicación desarrollada con VueJs y Firebase para ayudar a la gestión de promoción y venta de tickets para dicho evento. Contando así, con un chat para la interacción y una sección de comentarios para el feedback con los DJ´s invitados para la versión 2021 del evento en sí. Siendo atrayente para el fanático y asiduo público que está dentro de la onda techno de nuestro país.

#### Puedes copiar éste enlace:

https://proyecto-final-1-afa97.web.app/

## Vista previa INICIO

![Inicio](https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/readme%2Fscreen01.png?alt=media&token=ac05ee1e-af2b-492f-8558-641b8a168606 "Vista de inicio")

## Vista previa TICKET

![COMPRA TICKET](https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/readme%2Fscreen02.png?alt=media&token=3b803627-4122-4361-a4a6-194a7cd88f13 "Vista de tickets")

## Vista previa Selección de Tickets / resumen de boleta

![Resumen de Boleta](https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/readme%2Fscreen03.png?alt=media&token=aa34c112-c3fe-46d2-a376-dd4fa92089b8g "Vista de resumen de boleta")

## Vista previa de evento pasados. Galería de imagenes

![Galeria de Imagenes](https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/readme%2Fscreen04.png?alt=media&token=9f3e42a4-8662-45a1-a217-c821d17456f7 "Vista de concierto pasado")

## Vista previa CHAT

![CHAT](https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/readme%2Fscreencapture-localhost-8080-chat.png?alt=media&token=1fca405e-24d9-42d3-b6b9-642074362ade "Vista de chat")

## Vista previa faqs

![FAQS](https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/readme%2Fscreen09.png?alt=media&token=3beec36d-1953-4f50-b2e2-6874e2da6f2c "Vista de faqs")

## Paleta de colores 🖍️

> Los colores empleados son los primarios, estableciendo así un policromia en la app. Estableciendo, un manejo de analogos y complementarios en algunas vistas. Planteando la mecánica cromática de colores de saturación de blanco como tambien contrastes para la jerarquización de contra puntos visuales.

##### Ejemplo de gradient color

```
 background: #ff0000;
  background: linear-gradient(122deg, #ff0000 0%, #7100ff 80%);
  background: -webkit-linear-gradient(122deg, #ff0000 0%, #7100ff 80%);
  background: -moz-linear-gradient(122deg, #ff0000 0%, #7100ff 80%);
```

##### Ejemplo de style color

```

.tituloChat {
  color: #e65100;
}
.modificarUsuario {
  color: #ff6d00;
}
.textoFechaChat {
  color: #ff3d00;
}
.modificarMensajeChat {
  color: #ff7043;
}

```

## Fuente usada Sans serif ✒️

> La tipografía Montserrat tiene como fuente de inspiración viejos carteles, letreros luminosos y marquesinas del tradicional barrio de Buenos Aires. La diseñadora Julieta Ulanovsky ha desarrollado esta fuente que rescata la belleza de la tipografía urbana de la primera mitad del siglo XX. El objetivo es dar luz a lo que hay en Montserrat y mostrarlo libremente, bajo una licencia libre en código abierto.

```
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400&display=swap");

```

# Construido con 🔧

> Este proyecto está construido con la ayuda de Vuetify. -A MATERIAL DESIGN FRAMEWORK, un gran recurso para desarrollar aplicaciones y su aspecto profesional con VueJS. Éstas y otras tecnologías se han utilizado en el proyecto:

1. VueJS- El framework web escrito en javascript más versátil, simple y amigable de usar; además, progresivo para crear interfaces de usuario. Construido por medio de la comunidad desarrolladora. Bajo, la autoria y visión programática de Evan You.
2. Vue-CLI- Herramienta para complementar VueJS.
3. Vue-Router - Herramienta para complementar VueJs.
3. Vueity v2.3.18 - Framework para CSS.
4. NodeJs y npm/ yarn - Javascript como Backend y Manejador de dependencias.
5. HTML5 y CSS3 - Como lenguajes de etiquetas y estilos.
6. Firebase - Usado para hacer deploy y como hosting de la aplicación.

### Dependencies

1. core-js 3.6.5
2. firebase 7.24.0
3. moment 2.29.1
4. vue 2.6.11
5. vue chat scroll 1.4.0
6. vue router 3.2.0
7. vue-chat-scroll 1.4.0
8. vue router 3.2.0
9. vue swal 1.0.0
10. vuetify 2.2.11
11. vuex 3.4.0
12. vuex pesistedstate 4.0.0 beta-1

# Ingresa aquí para ver a la App 🔥

## Pasos a seguir 📄:

#### Instalar node modules y dependencias

```
yarn install
```

#### Una vez instalado, seguir con:

```
yarn serve
```

#### Instalación de Firebase:

```
npm i firebase
```

#### Compilación para producción:

```
yarn build
```

#### Construcción de la estructura:

```
firebase deploy --only hosting
```

#### Prueba de comando para correr E2E:

```
npm run test:e2e
```

# Testing e2e, **cypress** ✔️

#### Ventajas de cypress

1. No usa Selenium
2. Se enfoca en hacer E2E muy bien.
3. Funciona con cualquier front end.
4. Tests escritos en JavaScript
5. Es todo en uno.
6. Amigables con desarrolladores y QA
7. Mucho más rápido que las demás alternativas.

### Muestra de aprobación de test:

#### Test Inicio - CHAT

> Este Test E2E verifica desde el inicio la entrada y el logueo de las páginas con prohibición. Siendo recorridas hasta llegar al punto inicial.

1. Carga inicio
2. Testeo Navbar
3. Entrar LineUp _protegido_
4. Card Artista
5. Entrar Chat _protegido_
6. Entrar en Travel
7. Entrar ticket
8. Entrar en AUF2019

![test chat](https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/testE2E%2Fchat.png?alt=media&token=45c7f75a-b540-435d-a969-be99f2436092 "Test de chat desde inicio")

#### Test Inicio - Comentarios

> Este Test E2E verifica la realización de un CRUD (created, Read, Update, Delete), estableciendo una sección destinada para la interacción del artistas con el público del concierto.

![test comentarios](https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/testE2E%2Fcomentarios-crud.png?alt=media&token=2b18afb3-58ba-4380-9739-a8819582a922 "Test de comentarios desde inicio")

1. Carga inicio
2. Testea Navigation drawer
3. Testea contactanos
4. Agregar comentarios
5. Testea editar comentarios

#### Test Inicio - comprar de ticket

> Este Test E2E verifica la realización de la compra de un ticket.

![test inicio](https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/testE2E%2Finicio-compra-ticket.png?alt=media&token=1efa0b86-604f-446e-98d9-b6e61155d1ff "Test de compra de ticket desde inicio")

1. Carga de inicio
2. Navbar
3. Parallax
4. Componente PostArtistas
5. Componente Area concierto
6. Banner inicio
7. Link de redes
8. Encabezado de tickets
9. Modal normativa
10. Comprar ticket seleccionado

# Autor 💊

> El autor de este proyecto es:

- **Giovanni Di Rosa** - _*Desarrollo de prototipo y App*_ - (https://github.com/GIODIROSA)

# Licencia 📋

Este proyecto está bajo la Licencia gratuita y de caracter público - para consultas: giodirosaartes@gmail.com

# Expresiones de Gratitud ⚔️

- Puedes comentar a otros sobre este proyecto. 🕹️
- Formar hermandad conmigo 🔫
- Etc

⌨️ Gio Di Rosa. Hecho con ❤️

Ver [Configuration Reference](https://cli.vuejs.org/config/).
