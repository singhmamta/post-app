import { AgGridModule } from 'ag-grid-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { DataService } from './services/data.service';
import { ModalComponent } from './common/components/modal/modal.component';
import { ModalService } from './common/services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([],
    )
  ],
  providers: [
    DataService,
    PostService,
    ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
