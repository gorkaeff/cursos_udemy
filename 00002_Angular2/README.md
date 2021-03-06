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

* 11 - Uso del HTTP - CRUD - Firebase

Uso del modulo HTTP, servicios restful de Firebase, POST GET DELETE PUT y configuraciones consola Firebase

https://firebase.google.com/

* 12 - FireChat - AngularFire2

Usar AngularFire2 - Libreria oficial de angular para conectarse a Firebase, crear observables para escuchar mediante sockets los cambios en firebase. Autenticacion Google y Twitter para el chat. AngularFire2 para manejar inserciones. Promesas para ejecutar funciones cuando detectemos cambios en BBDD. Usar localStorage para almacenar informacion del login para mantener la sesion.

https://github.com/angular/angularfire2

* 13 - PeliculasApp

JSONP para obtener información que proviene de otros dominios. Posibles errores por la versión 2.4.6 y 2.4.7 del HTTP Router, actualizar paquete en proyecto especifico, enviar información de un componente a otro para resumer código HTML. API Themoviedb.

* 14 - Uso de Google Maps

Uso de Google Maps en un proyecto Angular, Creación y restricción API KEY Google Maps, Crear marcadores en mapa, Eventos, Edición de marcadores.

https://angular-maps.com

npm install angular2-google-maps --save
npm install @agm/core --save
ng generate component components/navbar -is
Traducciones --> 
npm install @ngx-translate/core --save
npm install @ngx-translate/http-loader --save

* 15 - Canal de Youtube

Crear un API KEY para acceder a servicios de Youtube API v3a, usar documentación de youtube para obtener informacion de un canal, obtener una lista de reproducción, crear una página en la cual puede cargar videos de forma paginada, token de respuesta de api youtube.

https://developers.google.com/youtube/v3/docs/

* 16 - Desplegando las aplicaciones a producción

Crear los archivos de distribucion, crear los archivos "pre produccion" y montarlo en un servidor para probar la aplicación.

```
//crear aplicacion
ng new despliegue
//acceder a la carpeta
cd despliege
//Pre Produccion - Ejecutar instruccion para crear carpeta dist (http-server npm TO TEST)
//http-server -o
ng build
//Produccion
//En src/environments/environment.ts, cambiar a production: true
ng build --prod
//Se genera de nuevo la carpeta dist con ficheros javascript con grandes numeros para prevenir la cache.
```

* 17 - Documentos de interés

https://angular.io/styleguide

https://cli.angular.io/reference.pdf

http://www.typescriptlang.org/docs/handbook/basic-types.html

https://material.angular.io/

https://angular.io/docs/ts/latest/tutorial/

* 18 - Bonus - Fileupload hacia Firebase

Uso de directivas, detalles Hostlistener, Inputs y outputs, storage firebase, uploadTask firebase, drop dragenter dragleave dragover, uso de tipo dato File.

https://github.com/jlmonteagudo/upload-firebase

https://github.com/angular/angularfire2

npm install firebase angularfire2 --save

* 19 - Actualización sobre Angular 4 y Angular CLI

http://angularjs.blogspot.com/2017/03/angular-400-now-available.html

Version 4 - Marzo 2017; 

Version 5 - Septiembre/Octubre 2017; 

Version 6 - Marzo 2018;

Version 7 - Septiembre/Octubre 2018;

```
npm uninstall -g angular-cli
npm uninstall --save-dev angular-cli

npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@latest

rm -rf node_modules dist # use rmdir /S/Q node_modules dist in Windows Command Prompt; use rm -r -fo node_modules,dist in Windows PowerShell
npm install --save-dev @angular/cli@latest
npm install
```

* 20 - Cierre del curso - despedida