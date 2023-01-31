import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListArticlesComponent } from './page-list-articles.component';

describe('PageListArticlesComponent', () => {
  let component: PageListArticlesComponent;
  let fixture: ComponentFixture<PageListArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
