# Curso de Angular 2 - [udemy](http://www.udemy.com)
## Temas

* 1 - Introducción al curso de Angular 2

GIT, nodeJS, angular-cli, atom, ionic, cordova, typescript

* 2 - Introducción a TypeScript

```
tsc app         //Compilar archivo app.ts y generar app.js
tsc app -w      //Escuchar cambios en typescript
tsc -init       //Crear proyecto typescript - crea fichero tsconfig.json
```

* 3 - Aplicación 1: Hola Mundo

Componentes (header, menu lateral, footer, paginas y subpaginas)

Directivas estructurales (ngIf, ngFor)

[Angular2](https://angular.io)

* 4 - Aplicación de usa sola página (SPA)

Angular CLI - npm install -g @angular/cli
```
ng generate component components/shared/navbar
ng generate component components/home
```

npm install bootstrap@4.0.0-alpha.6 --save

npm install jquery --save

npm install tether --save

Actualizar ficheros css y javascript en .angular-cli.json

```
ng g c components/about
ng g c components/heroes -is   //inline style : sin estilos
```

* 5 - Pipes (Transformar los datos)

uppercase y lowercase, Slice, Decimal, Percent, Currency, Json, Async, Date

Pipes personalizados: Capitalizar palabras y nombres + Creación de un pipe, que permite cargar recursos externos de forma segura.

ng g pipe pipes/domseguro

* 6 - SpotiApp

Rutas y parametros. Bootstrap 4. Uso de HTTP y uso API Spotify para obtener info de artistas, album y audio. Trabajar datos asíncronos. ngModel para enlazar campos de texto a variables. Widgets spotify. HTML5 audio, Observables y Maps.

[API Spotify](https://developer.spotify.com/web-api/console/)
[API Spotify Search](https://developer.spotify.com/web-api/console/search/)

* 7 - Ionic 2 App

Usar local storage para almacenar informacion. Introducción ionic 2. Servicios que afectan el local storage. Ionic view, controlar estilos, CRUD (update, delete, insert, select) y más pipes.

sudo npm install -g ionic cordova

ionic start --v2 deseos tabs

ionic serve

http://localhost:8100/ionic-lab

Ionic View App -- Apple Store

https://apps.ionic.io/login

* 8 - Componentes, directivas de atributos, ciclo de vida

Cambios de estilos, aplicar CSS sin afectar a los demás, condicionales, directivas personalizadas, ngSwitch, uso de rutas y rutas hijas y ciclo de vida de componente o directiva.

* 9 - Auth0

Que es Auth0 y documentacion basada en Angular 2, autenticacion con Facebook, Twitter, Google, crear formulario de captura para la creacion de usuarios, personalizar caja de login, servicio para bloquear rutas que no son validas si el usuario no esta autenticado, obtener informacion del usuario...INCOMPLETA, HAY QUE REHACERLA!!!!

* 10 - Formularios

Trabajar formularios, profundizar ngModel, validaciones prefabricadas, validaciones personalizadas, validacioneos asincronas, ngSubmit, post solo cuando la informacion es valida, formularios en lado del componente, informacion por defecto, subscribirse a los cambios de los valores de formularios

* 17 - Documentos de interés

https://angular.io/styleguide

https://cli.angular.io/reference.pdf

http://www.typescriptlang.org/docs/handbook/basic-types.html

https://material.angular.io/

https://angular.io/docs/ts/latest/tutorial/