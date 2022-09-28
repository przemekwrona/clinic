import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KSadsPLComponent } from './k-sads-pl.component';

describe('KSadsPLComponent', () => {
  let component: KSadsPLComponent;
  let fixture: ComponentFixture<KSadsPLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KSadsPLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KSadsPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
