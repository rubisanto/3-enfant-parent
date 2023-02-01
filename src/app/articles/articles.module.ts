import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListArticlesComponent } from './pages/page-list-articles/page-list-articles.component';
import { PageAddArticlesComponent } from './pages/page-add-articles/page-add-articles.component';
import { FormArticlesComponent } from './components/form-articles/form-articles.component';



@NgModule({
  declarations: [
    PageListArticlesComponent,
    PageAddArticlesComponent,
    FormArticlesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageListArticlesComponent,
    PageAddArticlesComponent,
    FormArticlesComponent
  ]
})
export class ArticlesModule { }
