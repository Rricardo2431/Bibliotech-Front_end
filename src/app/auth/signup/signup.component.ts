import { Component, OnInit } from '@angular/core';
import { librarian } from 'src/app/models/librarian';
import { Library } from 'src/app/models/library';
import { UserRole } from 'src/app/models/userrole';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  ModelUser: librarian[] = [];

constructor(
  private authService: AuthService,
  private httpclient: HttpClient,
  private route: ActivatedRoute
  )
{}

firstName!: string;
lastName!: string;
password!: string;

newUser = {

  firstName: this.firstName,
  lastName: this.lastName,
  password: this.password,
}

ngOnInit(): void {
  
}

signup() {
  this.authService.signupLibrarian(this.newUser)
}


}

