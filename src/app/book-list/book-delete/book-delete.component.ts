import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../../models/book';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {

  singleBookId!: Book;
  id: string = "";


  constructor(
    private SingleBookDelete: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private httpclient: HttpClient
  ) { }

  ngOnInit(): void {

  }

  deleteBookById(id: string): void {
    this.SingleBookDelete.deleteBook(id);
         }

}


