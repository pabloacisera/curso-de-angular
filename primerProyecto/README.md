# PrimerProyecto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



comandos
para generar nuevos componentes estandar: ng g @schematics/angular:component dashboard/dashboard("anteriormente va la ruta y el archivos sobre el que se creara el componente, por ejemplo en la ruta la carpeta dashboard en el archivo dasboard") --skip-selector --inline-style --skip-tests

cuando configuramos las rutas obtenemos un error type en loadComponents que se puede solucioar de dos maneras; 1- utilizando ".then(c, c.component('./ruta/del/componente'))"
2- ir al componente.componente.ts y decir que la clase se exportara por defecto

