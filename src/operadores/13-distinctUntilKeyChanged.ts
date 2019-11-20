import { of, from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

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
    distinctUntilKeyChanged( 'nombre' )
).subscribe( console.log );