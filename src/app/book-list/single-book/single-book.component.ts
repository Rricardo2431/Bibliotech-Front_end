import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

singleBookId: Book | undefined | any ;
id: string = "";

constructor(
  private SingleBookGet: BookService,
  private route : ActivatedRoute,
  private router: Router
    ) {}

    ngOnInit(): void {}

    getBookById(id: string): void {
      this.SingleBookGet.getBookById(id)
        .subscribe((data: Book) => {
          this.singleBookId = data;
          console.log(data);
        }
        )

    }
    redirectionPageSeven(route: string) {
      this.router.navigate(['/home']);
     }

}





