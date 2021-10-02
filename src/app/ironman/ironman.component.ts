import { IronmanService } from './../ironman.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ironman',
  templateUrl: './ironman.component.html',
  styleUrls: ['./ironman.component.css']
})
export class IronmanComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ironmanService: IronmanService) { }

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
    this.route.paramMap.subscribe(map => {
      const uid = map.get('id');
      if (uid) {
        this.ironmanService.getUserDetail(+uid) // 用加號把字串轉成數字
          .subscribe(resp => {
            this.userInfo = resp;
          });
      }
    });
  }
}

export interface IronmanUser
{
  userId: number;
  userName: string;
  email: string;
  verified: number | boolean;
}
