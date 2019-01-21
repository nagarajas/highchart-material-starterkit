
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLayoutComponent } from './table-layout.component';

describe('TableLayoutComponent', () => {
  let component: TableLayoutComponent;
  let fixture: ComponentFixture<TableLayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
