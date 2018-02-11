import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaveComponent } from './edit-save.component';

describe('EditSaveComponent', () => {
  let component: EditSaveComponent;
  let fixture: ComponentFixture<EditSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
