import { IronmanService } from './ironman.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IronmanComponent } from './ironman/ironman.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { IronmanListComponent } from './ironman-list/ironman-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { IronmanFormAddComponent } from './ironman-form-add/ironman-form-add.component';
import { FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    IronmanComponent,
    TestcompComponent,
    IronmanListComponent,
    IronmanFormAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [IronmanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
