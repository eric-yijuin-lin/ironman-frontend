import { IronmanService } from './../ironman.service';
import { Component, Input, OnInit } from '@angular/core';
import { IronmanUser as IronmanUser } from '../ironman/ironman.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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

  matTableDataSource: IronmanListRow[] = [];
  displayedColumns: string[] = [] = [
    'userId', 'userName', 'email', 'verified', 'showEditButton'
  ];

  constructor(private ironmanService: IronmanService, private router: Router) { }

  ngOnInit(): void {
    this.ironmanService
      .getUserList()
      .subscribe(data => {
        this.userListFromApi = data;
        this.matTableDataSource = data.map(x => {
          return {
            userId: x.userId,
            userName: x.userName,
            email: x.email,
            verified: x.verified,
            showEditButton: x.verified == 1 ? true : false
          }
        })
      });
  }

  onEditUser(id: number) {
    this.router.navigate(['/ironman', id]);
  }
}

export interface IronmanListRow {
  userId: number;
  userName: string;
  email: string;
  verified: number | boolean;
  showEditButton: boolean;
}
