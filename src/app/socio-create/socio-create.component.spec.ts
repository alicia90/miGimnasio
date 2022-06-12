import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioCreateComponent } from './socio-create.component';

describe('SocioCreateComponent', () => {
  let component: SocioCreateComponent;
  let fixture: ComponentFixture<SocioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocioCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
