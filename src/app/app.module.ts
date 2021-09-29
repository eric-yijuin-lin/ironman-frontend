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
    FormsModule
  ],
  providers: [IronmanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
