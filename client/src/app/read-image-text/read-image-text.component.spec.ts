import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadImageTextComponent } from './read-image-text.component';

describe('ReadImageTextComponent', () => {
  let component: ReadImageTextComponent;
  let fixture: ComponentFixture<ReadImageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadImageTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
