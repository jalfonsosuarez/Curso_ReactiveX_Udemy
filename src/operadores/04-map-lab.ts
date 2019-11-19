import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, libero a tempor ultrices, ligula est luctus lacus, eget scelerisque lacus elit eu elit. Integer suscipit pellentesque lobortis. Donec ut magna in elit aliquam tempus. Mauris nec ornare arcu. Sed sed lectus facilisis leo dapibus malesuada. Aliquam et lorem et justo convallis commodo. Nullam sed neque id nulla faucibus facilisis dictum at metus. Suspendisse efficitur congue felis congue condimentum. Ut a ipsum id lorem ullamcorper accumsan.
<br><br>
Aliquam pulvinar velit sapien, sit amet congue urna accumsan ut. Duis a nulla nisi. Integer rhoncus sagittis dui quis ultrices. Nullam sit amet orci in ipsum convallis euismod eget at dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ut bibendum velit. Phasellus a ex non turpis ultricies efficitur. Nam a lectus id tortor lacinia ultricies sed in est. Vestibulum condimentum tellus a sem accumsan, at posuere velit consequat. Donec sollicitudin, ante quis malesuada congue, metus eros gravida ligula, et suscipit dolor purus a tortor. Praesent convallis sodales lacus. Maecenas facilisis viverra risus et imperdiet. Mauris efficitur arcu ac laoreet maximus. Nullam eget auctor tortor. Duis vulputate pulvinar iaculis.
<br><br>
Pellentesque magna est, iaculis vitae elit ut, pretium pretium tellus. Nullam id ligula laoreet, mollis nibh at, efficitur erat. Ut nec volutpat urna. Integer vel urna vel lectus facilisis eleifend at quis nulla. Nunc libero elit, laoreet a vestibulum in, tempus non justo. Integer vehicula metus vel libero hendrerit, quis congue ex fringilla. Pellentesque at venenatis augue. Praesent dictum ornare semper.
<br><br>
Mauris vel nisl ornare, iaculis sem a, feugiat nibh. Proin malesuada, est nec rutrum consequat, urna dui volutpat dui, non rutrum velit nisi ut magna. Fusce vel bibendum diam. Praesent lobortis, lorem id lobortis eleifend, erat urna tincidunt nisi, eu pulvinar dolor metus at erat. Aliquam mattis tortor id vehicula blandit. Fusce viverra posuere ipsum, nec auctor neque consequat nec. Nunc rutrum, urna ac porta faucibus, odio neque tristique lacus, a consectetur ligula erat in massa. Cras posuere consectetur tortor sodales volutpat. Phasellus id finibus metus. Donec porttitor ultricies sodales.
<br><br>
Etiam vestibulum, libero semper viverra luctus, est quam efficitur ligula, quis pharetra neque felis a justo. Vestibulum non posuere erat, quis maximus erat. Suspendisse congue non ante vitae euismod. Aliquam libero mi, ultricies sed ultrices id, ultrices vel neque. Sed et elementum odio. Suspendisse mollis viverra tincidunt. Aliquam lacinia lacus nec laoreet tincidunt. Proin viverra enim et lorem lobortis, nec porta dolor pretium. Vestibulum non tortor metus. Vivamus rutrum dolor imperdiet, vehicula augue ut, molestie est. Sed ac eros fermentum, posuere diam aliquet, efficitur mi. Sed laoreet lectus non tincidunt euismod. In ut nibh quis erat volutpat commodo sit amet vitae justo. Morbi sollicitudin velit hendrerit tortor aliquam interdum.
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append( progressBar );

// Función que haga el cálculo
const calcularPorcentajeScroll = ( event ) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    // console.log({ scrollTop, scrollHeight, clientHeight });

    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;

};



// Streams
const scroll$ = fromEvent( document, 'scroll' );

// scroll$.subscribe( console.log );

const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll( event ) )
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {

    progressBar.style.width = `${porcentaje}%`;

});