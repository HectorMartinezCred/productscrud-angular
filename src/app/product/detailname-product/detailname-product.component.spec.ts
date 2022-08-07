import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnameProductComponent } from './detailname-product.component';

describe('DetailnameProductComponent', () => {
  let component: DetailnameProductComponent;
  let fixture: ComponentFixture<DetailnameProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailnameProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailnameProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
