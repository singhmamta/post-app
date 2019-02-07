import { AppError } from './../common/errors/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NotFoundError } from '../common/errors/not-found-error';

import {interval} from 'rxjs/internal/observable/interval';
import {startWith, switchMap} from 'rxjs/operators';
import { ModalService } from '../common/services/modal.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  columnDefs = [
    {headerName: 'Title', field: 'title', filter: true},
    {headerName: 'Url', field: 'url'},
    {headerName: 'Created', field: 'created_at'},
    {headerName: 'author', field: 'author'}
  ];

  rowData = [];
  selectedPostContent = '';
  constructor(private service: PostService, private modalService: ModalService, private changeDetectionRef: ChangeDetectorRef) {  }

  ngOnInit() {
      // polling at every 10 seconds
      interval(10000)
      .pipe(
        startWith(0),
        switchMap(() => this.service.getAll())
      )
      .subscribe(response => {
        const isNewPostsReceived = (this.rowData.length !== response.length)
        || (this.rowData[0].title !== response[0].title);
        this.rowData = response;
        if (isNewPostsReceived) {
          this.changeDetectionRef.detectChanges();
        }
      }, (error: NotFoundError) => {
        /*Todo: Do error handling in UI if required via alert/toast but for now I
        wish to suppress any error as polling running in background.*/
      });
    }

    postSelected(post: any) {
      this.selectedPostContent = JSON.stringify(post.data);
      this.modalService.open('postModal');
    }

    closeModal(id: string) {
      this.modalService.close(id);
      this.selectedPostContent  = '';
    }
  }


