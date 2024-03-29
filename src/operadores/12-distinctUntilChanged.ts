import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';



const numeros$ = of( 1,1,1,3,3,2,2,4,4,5,3,1 );

numeros$.pipe(
    distinctUntilChanged()
).subscribe( console.log );

interface Personaje {
    nombre: string
};

const personajes: Personaje[] = [
  {
    nombre: "megaman"
  },
  {
    nombre: "megaman"
  },
  {
    nombre: "Zero"
  },
  {
    nombre: "Dr. Willy"
  },
  {
    nombre: "x"
  },
  {
    nombre: "x"
  },
  {
    nombre: "Zero"
  }
];

from( personajes ).pipe(
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )
).subscribe( console.log );