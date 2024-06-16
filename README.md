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



HTTPCLIENT:
utilizar httpclient como provider en app.config.ts para utilizar el modulo y llamar a una api
provideHttpClient()

lo inyectamos en el constructor
constructor( private http: HttpClient ){}



no debemos olvidar crear una interface que determina que objeto u objetos van a venir, por ejemplo en el caso de pokemonapi

export interface Pokemon(){
  name: string,
  url: string,
}
export interface PokemonResults(){
  count: number;
  next: string,
  previous?:string;
  results: Pokemon[]
}

luego un metodo getPokemonList(): Observable<PokemonResults>{
  return this.http.get<PokemosResults>('AQUI VA LA URL que se puede guardar en .env')
}

antes de manejar los erroes debemos conectar con el servicio de la api

para ello trabajaremos en la pagina donde debe renderizarse

importaremos [asyncPipe, ErrorMessageComponent]//el pipe es quien gestiona la suscripcion y desuscripcion

/**********************************************/

vamos a suponer que se van a renderizar en:

export class PokemonList implements OnInit {

  public pokemonResults$:Observable<PokemonResults> //donde se va a guardar lo que venga la llamada

  constructor( private service: ServicePokemon){}

  ngOnInit():void{
    this.pokemonResults= this.service.getPokemonList();
  }
}

ahora en el template:

@if(pokemonResults$ | async; as resultObjetct ){
  <ul class="poke-list">
    @for(item of resultObjetct.results; track item.name){
      <li>
        "introducir el selector correspondiente(este sera el del  componente que tenga el @Input pokemosInfo: Pokemon)" //esta es la interface pokemon
      </li>
    }
  </ul>
}