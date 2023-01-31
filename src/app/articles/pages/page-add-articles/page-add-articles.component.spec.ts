import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddArticlesComponent } from './page-add-articles.component';

describe('PageAddArticlesComponent', () => {
  let component: PageAddArticlesComponent;
  let fixture: ComponentFixture<PageAddArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
