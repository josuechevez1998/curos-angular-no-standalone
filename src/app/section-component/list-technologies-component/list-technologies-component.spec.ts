import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechnologiesComponent } from './list-technologies-component';

describe('ListTechnologiesComponent', () => {
  let component: ListTechnologiesComponent;
  let fixture: ComponentFixture<ListTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTechnologiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
