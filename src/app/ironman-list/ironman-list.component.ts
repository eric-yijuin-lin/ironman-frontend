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

  constructor(private ironmanService: IronmanService, private router: Router) { }

  ngOnInit(): void {
    this.ironmanService
      .getUserList()
      .subscribe(data => {
        this.userListFromApi = data;
      });
  }

  onEditUser(id: number) {
    this.router.navigate(['/ironman', id]);
  }
}
