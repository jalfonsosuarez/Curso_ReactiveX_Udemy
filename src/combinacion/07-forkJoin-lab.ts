import { forkJoin, of } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';



const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER    = "jalfonsosuarez";

forkJoin(
  { usuario: ajax.getJSON( `${GITHUB_API_URL}/${GITHUB_USER}`),
    repos: ajax.getJSON( `${GITHUB_API_URL}/${GITHUB_USER}/repos`).pipe( 
      catchError( error => of([]) )
      ),
    gists: ajax.getJSON( `${GITHUB_API_URL}/${GITHUB_USER}/gists`),
  }
).pipe(
  catchError( err => of( err.message ) )
)
.subscribe( console.log );
