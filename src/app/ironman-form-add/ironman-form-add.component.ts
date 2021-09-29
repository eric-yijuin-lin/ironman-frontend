import { IronmanService } from './../ironman.service';
import { IronmanUser } from './../ironman/ironman.component';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ironman-form-add',
  templateUrl: './ironman-form-add.component.html',
  styleUrls: ['./ironman-form-add.component.css']
})
export class IronmanFormAddComponent implements OnInit {

  submitted = false;
  userModel: IronmanUser = {
    userId: 0,
    userName: '',
    email: '',
    verified: false
  };
  constructor(private ironmanService: IronmanService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.userModel.userName = 'timeeeeeee';
    }, 1000);
  }

  onSubmit(form: NgForm): void {
    console.log(form);
    if (form.valid) {
      this.ironmanService
      .addUser(this.userModel)
      .subscribe(resp => {
        this.submitted = true;
      });
    }
  }
}
