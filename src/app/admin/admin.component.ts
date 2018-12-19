import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { defineBase } from '@angular/core/src/render3';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(public db: AngularFireDatabase) {}

  ngOnInit() {}
  // Add New Book
  AddBook(
    setTitle: String,
    setAuthor: String,
    setCategory: String,
    setDate: String,
    setLanguage: String,
    setDescription: String
  ): void {
    const myRef = firebase
      .database()
      .ref('/books')
      .push();
    const key = myRef.key;
    const newData = {
      title: setTitle,
      author: setAuthor,
      category: setCategory,
      date: setDate,
      language: setLanguage,
      description: setDescription,
      id: key
    };
    myRef.set(newData);
  }

  deleteBook(key: string) {
    const bookRef = this.db.list('/books/' + key);
    bookRef.remove();
  }
  editBook(
    bookId: String,
    updateTitle: String,
    updateAuthor: String,
    updateCategory: String,
    updateDate: String,
    updateLanguage: String,
    updateDescription: String
  ): void {
    const bookRef = this.db.list('/books/' + bookId);
    bookRef.update('key-of-some-data', {
      title: updateTitle,
      author: updateAuthor,
      category: updateCategory,
      date: updateDate,
      language: updateLanguage,
      description: updateDescription
    });
  }
}
