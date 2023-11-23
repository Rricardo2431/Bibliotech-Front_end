import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Library } from '../models/library';
import { Router } from '@angular/router';



@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent implements OnInit {

  libraryList: Library[] = [];

  
  constructor(
    private libraryAll: LibraryService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.libraryAll.getAllLibraries()
      .subscribe((data: Library[]) => {
        this.libraryList = data;
        console.log(data);
      }
      )
  }

  redirectionPageSeven(route: string) {
    this.router.navigate(['/home']);
   }
  

}
