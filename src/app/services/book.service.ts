import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  Books: Book[] = [];

  constructor(private httpclient: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.httpclient.get<Book[]>("http://localhost:8080/book")
  }

  getBookById(id: string): Observable<Book> {
    return this.httpclient.get<Book>(`http://localhost:8080/book/${id}`)
  }

  addLbook(book: Book): Observable<Book> {
    return this.httpclient.post<Book>("http://localhost:8080/book", book)
  }

  deleteBook(id: string): void {
    this.httpclient.delete(`http://localhost:8080/book/${id}`).subscribe((data) => console.log(data))
  }

}


