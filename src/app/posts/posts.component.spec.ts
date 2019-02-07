import { ModalService } from './../common/services/modal.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { PostService } from '../services/post.service';
import { ChangeDetectorRef } from '@angular/core';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent],
      providers: [PostService, ModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
