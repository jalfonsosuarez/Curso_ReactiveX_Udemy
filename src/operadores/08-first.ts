import { fromEvent } from 'rxjs';
import { take, first, tap, map } from 'rxjs/operators';



const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    tap<MouseEvent>( console.log ),
    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }))
    map( ({ clientX, clientY }) => ({ clientY, clientX })),
    // tap( () => console.log( 'tap' ) ),
    // first<MouseEvent>( event => event.clientY >= 150  )
    first( event => event.clientY >= 150  )
).subscribe( {
    next: valor => console.log( 'next', valor ),
    complete: () => console.log( 'complete' )
});