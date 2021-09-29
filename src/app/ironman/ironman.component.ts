import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-ironman',
  templateUrl: './ironman.component.html',
  styleUrls: ['./ironman.component.css']
})
export class IronmanComponent implements OnInit {

  constructor() { }

  @Input()
  userInfo: IronmanUser = {
    userId: 0,
    userName: '',
    email: '',
    verified: 0
  };

  @Output()
  testOuputEvent = new EventEmitter<IronmanUser>();
  @Output()
  userInfoChange = new EventEmitter<IronmanUser>();

  ngOnInit(): void {
    const mockInfo = {
      userId: 999,
      userName: 'testUser',
      email: 'test@test.mail',
      verified: 0
    }

    setTimeout(() => {
      this.testOuputEvent.emit(mockInfo)
    }, 1000);

    const modifiedInfo = {
      userId: 2,
      userName: 'Bob',
      email: 'bob@test.mail',
      verified: 1
    }

    setTimeout(() => {
      this.userInfoChange.emit(modifiedInfo)
    }, 1500);
  }
}

export interface IronmanUser
{
  userId: number;
  userName: string;
  email: string;
  verified: number | boolean;
}
