import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { EnglishTerm, Definition, FormAddTerm, FormAddTermResponse, FormAddDef, FormAddDefResponse} from "./data-classes";


// Import data model classes, for example...
//import { Product } from "./data-classes";
import { Post, Comment, Geo, Address, Company, User } from "./data-classes";
import { ReqresUser, ReqresUserCollectionPackage, ReqresUserSinglePackage, ReqresUserCreate, ReqresUserCreateResponse } from "./data-classes";

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  // Inject the HttpClient
  constructor(private http: HttpClient) { }

  // Base URL for the example typicode web API
  //private url: string = 'https://example.com/api';
  private url: string = 'https://jsonplaceholder.typicode.com';

  private urlEng: string = "https://polar-stream-23993.herokuapp.com/api/terms/english";
  //https://polar-stream-23993.herokuapp.com/api/terms/english
  //http://localhost:8080/api/terms/english";
  
  //"https://polar-lowlands-18103.herokuapp.com/api/terms/english";
  //"https://pam-2020-a2and3webapi.herokuapp.com/api/terms/english"

  // Options object for POST and PUT requests
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Error handler, from the Angular docs
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  

     /**********   T E R M = fetch one    ***********
     termGetById(id: number): Term {
    
      return this.dataTerm.find(i => i.id == id);
    }*/


  // ############################################################
  // Data service operations - typicode web API

  // Callable methods...
  // For each entity, as appropriate, get, add, edit, delete
  // Add other methods that provide general service to all components in the app

  helpY(num: number){
    
  }

  englishTermGetAll(): Observable<EnglishTerm[]> {
    return this.http.get<EnglishTerm[]>(`${this.urlEng}`);
  }

  englishTermGetById(id: string): Observable<EnglishTerm> {
    return this.http.get<EnglishTerm>(`${this.urlEng}/${id}`)
  }

  englishTermAdd(newTerm: FormAddTerm): Observable<FormAddTermResponse> {
    return this.http.post<FormAddTermResponse>(this.urlEng, newTerm, this.httpOptions)
      .pipe(
        tap((newTerm: FormAddTermResponse) => console.log(`Added item ${newTerm.wordEnglish}`)),
        catchError(this.handleError<FormAddTermResponse>('Term add'))
      );
  }

  englishTermAddDefinition(id: string, newDef: FormAddDef): Observable<FormAddDefResponse> {
    return this.http.put<FormAddDefResponse>(`${this.urlEng}/${id}/add-definition`, newDef, this.httpOptions)
      .pipe(
        tap((newDef: FormAddDefResponse) => console.log(`Added item ${newDef}`)),
        catchError(this.handleError<FormAddDefResponse>('Definition add'))
      );
  }

  

  englishTermIncrementHelpYes(id: string, newItem: FormAddTerm): Observable<FormAddTermResponse> {;
    return this.http.put<FormAddTermResponse>(`${this.urlEng}/helpyes/${id}`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: FormAddTermResponse) => console.log(`Edited item ${newItem}`)),
        catchError(this.handleError<FormAddTermResponse>('User edit'))
      );
  }

  englishTermIncrementHelpNo(id: string, newItem: FormAddTerm): Observable<FormAddTermResponse> {;
    return this.http.put<FormAddTermResponse>(`${this.urlEng}/helpno/${id}`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: FormAddTermResponse) => console.log(`Edited item ${newItem}`)),
        catchError(this.handleError<FormAddTermResponse>('User edit'))
      );
  }

englishTermIncrementLikes(id: string, newItem: FormAddDef): Observable<FormAddDefResponse> {

    return this.http.put<FormAddDefResponse>(`${this.urlEng}/${id}`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: FormAddDefResponse) => console.log(`Edited item ${newItem}`)),
        catchError(this.handleError<FormAddDefResponse>('User edit'))
      );
  }
  


  
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`)
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/comments`)
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`)
  }




}
