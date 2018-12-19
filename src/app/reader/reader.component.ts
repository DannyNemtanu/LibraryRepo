import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {
  readBook: object;
  books: Array<any> = [];
  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    this.getBooks();
  }
  getBooks() {
    this.db
      .list('/books')
      .valueChanges()
      .subscribe(res => {
        this.books = res;
      });
  }
  showBookInfo(event) {
    let e = event.target.id;
    this.db.object('/books/' + e).valueChanges().subscribe(res => {
      this.readBook = res;
      console.log(this.readBook);
    });
  }

}
