import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Library } from '../models/library';


@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  Libraries: Library[] = [];

  constructor(private httpclient: HttpClient) { }

  getAllLibraries(): Observable<Library[]> {
    return this.httpclient.get<Library[]>("http://localhost:8080/library")
            }


  getLibraryById(id: string): Observable<Library> {
    return this.httpclient.get<Library>(`http://localhost:8080/library/${id}`)  
  }


  addLLibrary(library: Library): Observable<Library> {
    return this.httpclient.post<Library>("http://localhost:8080/library", library)
  }

deleteLibrary(id: string): Observable<Library> {
  return this.httpclient.delete<Library>(`http://localhost:8080/library/${id}`)
}

}