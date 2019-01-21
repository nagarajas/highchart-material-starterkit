
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayutComponent } from './layut.component';

describe('LayutComponent', () => {
  let component: LayutComponent;
  let fixture: ComponentFixture<LayutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [LayutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
