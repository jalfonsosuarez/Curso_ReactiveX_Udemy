
import { Observable, Observer } from 'rxjs';

// En una variable incluimos todo el código a ejecutar por el subscibe. 
const observer: Observer<any> = {

    next: value => console.log( 'next: ', value ),
    error: error => console.warn( 'error [obs]: ', error),
    complete: () => console.info( 'completado [obs]' )

}

// const obs$ = Observable.create();

// Es importante indicar que que tipo es la información que envía el observable. 
// La variable del observable se suele indicar con un $ al final.
const obs$ = new Observable<string>( subs => {

    subs.next( 'Hola' );
    subs.next( 'Mundo' );

    subs.next( 'Hola' );
    subs.next( 'Mundo' );

    //Forzamos el envío del error
    const a = undefined;
    a.nombre = 'Fernando';

    // Al hacer el complete, se termina la emisión por la subscripción.
    subs.complete();
    
});

// Incluir la variable dentro del subscribe. 
obs$.subscribe( observer );

// obs$.subscribe( resp => {
//     console.log(resp);
// });

// obs$.subscribe( console.log );

// obs$.subscribe(

//     valor => console.log( 'next: ', valor ),
//     error => console.warn( 'error: ', error ),
//     () => console.info( 'complete' )

// );





