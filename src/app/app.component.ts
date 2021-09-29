import { Component } from '@angular/core';
import { IronmanUser } from './ironman/ironman.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInfoFromAppComponent: IronmanUser = {
    userId: 1,
    userName: 'Alice',
    email: 'alice@mail.test',
    verified: 1
  }

  userListFromAppComponent: IronmanUser[] = [
    {
      userId: 1,
      userName: 'Alice',
      email: 'alice@test.mail',
      verified: 1
    },
    {
      userId: 2,
      userName: 'Bob',
      email: 'bob@test.mail',
      verified: 1
    },
    {
      userId: 3,
      userName: 'Cathy',
      email: 'cathy@test.mail',
      verified: 1
    },
    {
      userId: 4,
      userName: 'David',
      email: 'david@test.mail',
      verified: 0
    },
    {
      userId: 999,
      userName: 'Bug',
      email: '',
      verified: -1
    },
  ];
  title = 'ironman-frontend';

  handleTestEvent(userInfo: IronmanUser): void {
    alert(`AppComponent 接收到 IronmanComponent 丟出的 userInfo: ${JSON.stringify(userInfo)}`)
  }
}
