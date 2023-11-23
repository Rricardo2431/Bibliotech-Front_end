import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LibraryListComponent } from './library-list/library-list.component';
import { LibraryAddComponent } from './library-list/library-add/library-add.component';
import { SingleLibraryComponent } from './library-list/single-library/single-library.component';
import { LibraryDeleteComponent } from './library-list/library-delete/library-delete.component';
import { LibrarianDeleteComponent } from './librarian/librarian-delete/librarian-delete.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-list/book-add/book-add.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookDeleteComponent } from './book-list/book-delete/book-delete.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'librarian-signup', component: SignupComponent },
  { path: 'book-delete', component: BookDeleteComponent },
  { path: 'library-delete', component: LibraryDeleteComponent },
  { path: '', redirectTo: 'librarian-signin', pathMatch: 'full' },
  { path: 'book-add', component: BookAddComponent },
  { path: 'library-add', component: LibraryAddComponent },
  { path: 'library-one', component: SingleLibraryComponent },
  { path: 'home', component: HeaderComponent},
  { path: 'librarian-signin', component: SigninComponent },
  { path: 'librarian-signout', component: SignoutComponent },
  { path: 'library-list', component: LibraryListComponent },
  { path: 'librarian-list/delete/:id', component: LibrarianDeleteComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'book-one', component: SingleBookComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
