import { of } from 'rxjs';

// const obs$ = of<number>( 1,2,3,4,5,6 );
const obs$ = of( [1,2], {a:1, b:1}, true, Promise.resolve(true) );

console.log('Inicio del obs$');
obs$.subscribe( 
    next => console.log( 'next', next ),
    null,
    () => console.log('Secuencia terminada.')
);
console.log('Fin del obs$');