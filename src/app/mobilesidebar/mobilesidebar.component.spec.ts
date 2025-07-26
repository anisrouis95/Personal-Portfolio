import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesidebarComponent } from './mobilesidebar.component';

describe('MobilesidebarComponent', () => {
  let component: MobilesidebarComponent;
  let fixture: ComponentFixture<MobilesidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilesidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobilesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
