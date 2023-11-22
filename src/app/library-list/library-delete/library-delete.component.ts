import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { Library } from '../../models/library';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-library-delete',
  templateUrl: './library-delete.component.html',
  styleUrls: ['./library-delete.component.scss']
})
export class LibraryDeleteComponent implements OnInit{

  singleLibraryId: Library | undefined | any ;
  id: string = "";



constructor(
  private SinglelibraryDelete: LibraryService,
  private router: Router,
  private route: ActivatedRoute,
  private httpclient: HttpClient
) { }
  ngOnInit(): void {
        
      }
  
  deleteLibraryById(id: string): void {
    this.SinglelibraryDelete.deleteLibrary(id)
      .subscribe((data: Library) => {
        this.singleLibraryId = data;
        console.log(data);
        this.router.navigate(['/library-list']);
      }
      )
  }




}
