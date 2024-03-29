import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';



const numeros$ = of( 1,1,1,3,3,2,2,4,4,5,3,1 );

numeros$.pipe(
    distinct()
).subscribe( console.log );

interface Personaje {
    nombre: string
};

const personajes: Personaje[] = [
    {
        nombre: 'megaman'
    },
    {
        nombre: 'x'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'x'
    },
    {
        nombre: 'megaman'
    },
    {
        nombre: 'Zero'
    },
];

from( personajes ).pipe(
    distinct( p => p.nombre )
).subscribe( console.log );