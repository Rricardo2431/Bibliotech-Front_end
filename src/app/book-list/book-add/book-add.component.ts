import { Component,OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit{

constructor(
  private addSingleBook: BookService,
  private httpclient: HttpClient,
  private route: ActivatedRoute
) { }

listModelBook: Book[] = [];

bookOptions: Book[] = [
  { id: 1, title: "Annexe dédit formation GRH00013", category: "ressources humaines", quantity: 1, libraries: [] },
  { id: 2, title: "Modalités de réalisation des audits de sécurité", category: "organisation générale", quantity: 1, libraries: [] },
  { id: 3, title: "Fonction de  gestion du estionnaire de documentation", category: "sécurité", quantity: 1, libraries: [] },
  { id: 4, title: "Prévention du risque amiante", category: "prévention", quantity: 1, libraries: [] }
];

newBook: Book = new Book(0, '', '', 0, []);

ngOnInit(): void {

  this.httpclient.get<Book[]>("http://localhost:8080/book")
  .subscribe((data: Book[]) => {
    this.listModelBook = data;
    console.log(data);
   
  })

}

addBook(): void {
  this.addSingleBook.addLbook(this.newBook)
    .subscribe((data: Book) => {
      console.log(data);
     
    });

}
}
