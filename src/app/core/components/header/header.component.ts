import { Component, OnInit } from '@angular/core';
import { Profile } from 'selenium-webdriver/firefox';
import { User } from '../../../courses/models/user';

const user = new User('fake', 'fake');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User = user;

  constructor() { }

  ngOnInit() {
  }

  showProfile() {
    console.log('showProfile', this.user);
  }

  sighIn() {
    this.user = user;
  }

  sighUp() {
    this.user = user;
  }

  sighOff() {
    this.user = null;
  }
}
