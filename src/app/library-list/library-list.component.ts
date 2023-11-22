import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Library } from '../models/library';




@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent implements OnInit {

  libraryList: Library[] = [];

  
  constructor(private libraryAll: LibraryService) { }

  ngOnInit(): void {
    this.libraryAll.getAllLibraries()
      .subscribe((data: Library[]) => {
        this.libraryList = data;
        console.log(data);
      }
      )
  }
}
