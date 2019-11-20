import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';




const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append( boton );

const counter$ = interval(1000);
// const clickBtn$ = fromEvent( boton, 'click' );
const clickBtn$ = fromEvent( boton, 'click' ).pipe(
    tap( () => console.log( 'tap antes de skip' ) ),
    skip(1),
    tap( () => console.log( 'tap después de skip' ) )
);

counter$.pipe(
    takeUntil( clickBtn$ )
).subscribe( {
    next: valor => console.log( 'next', valor ),
    complete: () => console.log( 'complete' )
});