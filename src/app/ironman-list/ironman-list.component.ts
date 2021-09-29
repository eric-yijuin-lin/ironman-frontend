import { IronmanService } from './../ironman.service';
import { Component, Input, OnInit } from '@angular/core';
import { IronmanUser as IronmanUser } from '../ironman/ironman.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ironman-list',
  templateUrl: './ironman-list.component.html',
  styleUrls: ['./ironman-list.component.css']
})
export class IronmanListComponent implements OnInit {

  @Input()
  userList: IronmanUser[] = [];

  apiUrl = 'https://goattl.tw';
  userListFromApi: IronmanUser[] = [];

  constructor(private ironmanService: IronmanService) { }

  ngOnInit(): void {
    this.ironmanService
      .getUserList()
      .subscribe(data => {
        this.userListFromApi = data;
      })
    this.ironmanService.deleteUser(3);
  }

}
