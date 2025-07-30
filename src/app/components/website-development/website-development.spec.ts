import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDevelopment } from './website-development';

describe('WebsiteDevelopment', () => {
  let component: WebsiteDevelopment;
  let fixture: ComponentFixture<WebsiteDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteDevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteDevelopment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
