import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { librarian } from 'src/app/models/librarian';
import { librariandto } from 'src/app/models/librariandto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  LibrarianSignin!: librariandto;
  firstName!: string;
  lastName!: string;
  password!: string;
  isFormSubmitted: any;


  constructor(
    private autthservice: AuthService,
    private httpclient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isFormSubmitted = true;
    const librarian = new librariandto(this.firstName, this.lastName, this.password);
    this.signin(librarian);
  }


  signin(librarian: librariandto): void {
    this.autthservice.signinLibrarian(librarian).subscribe((data: librariandto) => {
      this.LibrarianSignin = data;
      console.log(data);
      this.router.navigate(['/home']);
    });

  }

  redirectionPageEight(route: string) {
    this.router.navigate(['/librarian-signup']);
   }

}
