import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMexicoComponent } from './new-mexico.component';

describe('NewMexicoComponent', () => {
  let component: NewMexicoComponent;
  let fixture: ComponentFixture<NewMexicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMexicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewMexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
