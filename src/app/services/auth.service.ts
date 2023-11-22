import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { librarian } from '../models/librarian';
import { Observable, tap } from 'rxjs';
import { librariandto } from '../models/librariandto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  private _registerUrl = "http://localhost:8080/librarian/signup";

  signupLibrarian(librarian: any): Observable<librarian> {
    return this.httpclient.post<librarian>(this._registerUrl, librarian)
  }


  signinLibrarian(librarian: librariandto): Observable<librariandto> {
    return this.httpclient.post<librariandto>("http://localhost:8080/librarian/signin", librarian);

  }


  getAllLibrarian(): Observable<librarian[]> {
    return this.httpclient.get<librarian[]>("http://localhost:8080/librarian")





  }
}
