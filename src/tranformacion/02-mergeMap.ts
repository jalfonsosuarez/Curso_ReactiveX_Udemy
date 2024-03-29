import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';



const letras$ = of( 'a', 'b', 'c' );

letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra + 1 ),
        take(3)
    ) )
)
// .subscribe({
//     next: val => console.log( 'next:', val ),
//     complete: () => console.log( 'complete' )
// });

const mouseDown$ = fromEvent( document, 'mousedown' );
const mouseUp$   = fromEvent( document, 'mouseup' );
const interval$  = interval();

mouseDown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseUp$ )
    ))
).subscribe( console.log );