import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../../articles.service';

@Component({
  selector: 'app-page-list-articles',
  templateUrl: './page-list-articles.component.html',
  styleUrls: ['./page-list-articles.component.scss']
})
export class PageListArticlesComponent implements OnInit {
  @Input () item !: any;

  constructor(private ArticlesServices : ArticlesService, private router : Router) {
    console.log('articles')

    this.ArticlesServices.getArticles().subscribe((data : any) => {
      this.item = data;
      console.log(this.item);
    })
  }

  ngOnInit(): void {
  }

}
