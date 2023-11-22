import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Library } from 'src/app/models/library';
import { Book } from 'src/app/models/book';
import { librarian } from 'src/app/models/librarian';


@Component({
  selector: 'app-library-add',
  templateUrl: './library-add.component.html',
  styleUrls: ['./library-add.component.scss']
})
export class LibraryAddComponent implements OnInit {


  constructor(
    private addSingleLibrary: LibraryService,
    private httpclient: HttpClient,
    private route: ActivatedRoute,

  ) { }

  listModelLibrary: Library[] = [];


  librarianOptions: librarian[] = [
    { id: 1, firstName: "Richard", lastName: "NGUYEN", password: "Motdepasse@1", role: "administrateur", library: [] },
    { id: 2, firstName: "Richard", lastName: "NGUYEN", password: "Motdepasse@1", role: "administrateur", library: [] },
    { id: 3, firstName: "Rachid", lastName: "FAR", password: "Motdepasse@2", role: "chef bibliothecaire", library: [] },
    { id: 4, firstName: "Rachid", lastName: "FAR", password: "Motdepasse@2", role: "chef bibliothecaire", library: [] }
  ];
  newLLibrary: Library = new Library(0, '', '', new Date(), [], []);

  ngOnInit(): void {


    this.httpclient.get<Library[]>("http://localhost:8080/library")
      .subscribe((data: Library[]) => {
        this.listModelLibrary = data;
        console.log(data);

      })
  }
  addLibrary(): void {
    this.addSingleLibrary.addLLibrary(this.newLLibrary)
      .subscribe((data: Library) => {
        console.log(data);

      });

  }

}




