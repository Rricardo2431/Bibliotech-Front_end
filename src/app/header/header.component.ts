import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


constructor(private router: Router) { }




redirectionPage(route: string) {
   this.router.navigate(['/library-list']);
  }

  redirectionPageTwo(route: string) {
    this.router.navigate(['/book-list']);
  }

  redirectionPageThree(route: string) {
    this.router.navigate(['/book-one']);
  }

  redirectionPageFour(route: string) {
    this.router.navigate(['/library-one']);
  }
   
  redirectionPageFive(route: string) {
    this.router.navigate(['/library-add']);
  }

  redirectionPageSix(route: string) {
    this.router.navigate(['/book-add']);
  }
}
