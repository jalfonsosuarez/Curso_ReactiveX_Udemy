
import { Observable, Observer, Subscriber } from 'rxjs';
import { setTimeout } from 'timers';

const observer: Observer<any> = {

    next: value => console.log( 'next: ', value ),
    error: error => console.warn( 'error: ', error),
    complete: () => console.info( 'completado' )

}

const intervalo$ = new Observable<number>( subscriber => {

    // Crear un contador que emita numero secuencialmente. 
    let count = 0;

    const interval = setInterval( () => {

        count++;
        subscriber.next( count );
        console.log(count);

    }, 1000 );

    setTimeout( () => {
        subscriber.complete();
    }, 2500 );

    return () => {
        clearInterval( interval );
        console.log( 'Intevalo destruido' );
    }

});

// Varias subscripciones al mismo observable
// const subs1 = intervalo$.subscribe( num => {console.log( 'Num: ', num );});
// const subs2 = intervalo$.subscribe( num => {console.log( 'Num: ', num );});
// const subs3 = intervalo$.subscribe( num => {console.log( 'Num: ', num );});
const subs1 = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

subs1.add( subs2 )
     .add( subs3 );

setTimeout(()=>{
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();

    console.log('Completado timeout');

}, 6000)