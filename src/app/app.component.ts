import {Component} from '@angular/core';
import * as firebase from "firebase";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
      // Initialize Firebase
      const config = {
          apiKey: "AIzaSyAMN7aNwMh21PSMBxfqXaMG-rs2LvaBcXc",
          authDomain: "test-17de9.firebaseapp.com",
          databaseURL: "https://test-17de9.firebaseio.com",
          projectId: "test-17de9",
          storageBucket: "test-17de9.appspot.com",
          messagingSenderId: "37173491913"
      };
      firebase.initializeApp(config);
  }
}
