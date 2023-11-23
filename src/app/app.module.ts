import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { HeaderComponent } from './header/header.component';
import { LibraryListComponent } from './library-list/library-list.component';
import { LibraryAddComponent } from './library-list/library-add/library-add.component';
import { LibraryDeleteComponent } from './library-list/library-delete/library-delete.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-list/book-add/book-add.component';
import { BookDeleteComponent } from './book-list/book-delete/book-delete.component';
import { AuthService } from './services/auth.service';
import { BookService } from './services/book.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { SingleLibraryComponent } from './library-list/single-library/single-library.component';
import { RouterModule, Routes } from '@angular/router';
import { LibrarianDeleteComponent } from './librarian/librarian-delete/librarian-delete.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    SignoutComponent,
    HeaderComponent,
    LibraryListComponent,
    LibraryAddComponent,
    LibraryDeleteComponent,
    BookListComponent,
    BookAddComponent,
    BookDeleteComponent,
    SingleBookComponent,
    SingleLibraryComponent,
    LibrarianDeleteComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

  ],
  providers: [
    AuthService,
    BookService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
