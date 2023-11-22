import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList: Book[] = [];

  constructor(private bookAll: BookService) { }


ngOnInit(): void {
  this.getAllBook();

}

deleteBookById(id: string): void {
  this.bookAll.deleteBook(id);
  setTimeout(() => {
  this.bookList = [];
  this.getAllBook();
  }, 300);
}

getAllBook(): void {
  this.bookAll.getAllBooks()
.subscribe((data: Book[]) =>{
  this.bookList = data;
  console.log(data);
}
)
}

}

 
