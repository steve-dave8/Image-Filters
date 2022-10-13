import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDropboxComponent } from './img-dropbox.component';

describe('ImgDropboxComponent', () => {
  let component: ImgDropboxComponent;
  let fixture: ComponentFixture<ImgDropboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgDropboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgDropboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
