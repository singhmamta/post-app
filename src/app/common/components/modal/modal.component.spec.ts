import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { ModalService } from '../../services/modal.service';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [ ModalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
