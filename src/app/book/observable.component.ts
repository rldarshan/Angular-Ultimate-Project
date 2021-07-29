import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookService } from './book.service';
import { Book } from './book';

@Component({
   selector: 'app-observable',
   template: `
   <h3>Book Details with Observable </h3>
   <ul>
     <li *ngFor="let book of books" >
       Id: {{book.id}}, Name: {{book.name}}
     </li>
   </ul>
   <div>
     <div>
        <label>Id: </label>
        <input [(ngModel)]="book.id" />
     </div>
     <div>
        <label>Name: </label>
        <input [(ngModel)]="book.name" />
     </div>
     <div>
        <button (click)="addBook()">Add</button>
     </div>
   </div> 
   <div *ngIf="bookName" [ngClass] = "'success'"> {{bookName}} Added. </div>
   <div *ngIf="errorMessage" [ngClass] = "'error'"> {{errorMessage}} </div> 
   `,
   /* styles: ['
   .success{
    color: green;
    font-size: 20px;
}
.error{
    color: red;
    font-size: 20px;
} 
'] */
})
export class ObservableComponent implements OnInit {
   books: Book[];
   errorMessage: String;
   bookName: String;
   book = new Book();
   constructor(private bookService: BookService) { }
   ngOnInit(): void {
      this.fetchBooks();
   }
   fetchBooks(): void {
      this.bookService.getBooksWithObservable()
         .subscribe(books => this.books = books,
            error => this.errorMessage = <any>error);
   }
   addBook(): void {
      this.bookService.addBookWithObservable(this.book)
         .subscribe(book => {
            this.fetchBooks();
            this.reset();
            this.bookName = book.name;
         },
            error => this.errorMessage = <any>error);
   }
   private reset() {
      this.book.id = null;
      this.book.name = null;
      this.errorMessage = null;
      this.bookName = null;
   }
} 