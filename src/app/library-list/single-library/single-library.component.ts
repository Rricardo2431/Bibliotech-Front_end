import { Component,OnInit } from '@angular/core';
import { Library } from 'src/app/models/library';
import { LibraryService } from 'src/app/services/library.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-library',
  templateUrl: './single-library.component.html',
  styleUrls: ['./single-library.component.scss']
})
export class SingleLibraryComponent implements OnInit{

singleLibraryId: Library | undefined | any ;
id: string = "";
 
constructor(
  private SingleLibraryGet: LibraryService,
  private route : ActivatedRoute,
  private router : Router
    ) {} 

    ngOnInit(): void {

    }

    getLibraryById(id: string): void {
    this.SingleLibraryGet.getLibraryById(id)
      .subscribe((data: Library) => {
        this.singleLibraryId = data;
        console.log(data);
      }
      )
  }

  redirectionPageSeven(route: string) {
    this.router.navigate(['/home']);
   }

}
  
  
  


