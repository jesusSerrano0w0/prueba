import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUsuariosComponent } from './update-usuarios.component';

describe('UpdateUsuariosComponent', () => {
  let component: UpdateUsuariosComponent;
  let fixture: ComponentFixture<UpdateUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
