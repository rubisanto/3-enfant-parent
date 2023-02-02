import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../../articles.service';

@Component({
  selector: 'app-page-list-articles',
  templateUrl: './page-list-articles.component.html',
  styleUrls: ['./page-list-articles.component.scss']
})
export class PageListArticlesComponent implements OnInit {

  item : any;

  constructor(private ArticlesServices : ArticlesService, private router : Router) {
    console.log('articles')

    this.ArticlesServices.getArticles().subscribe((data : any) => {
      this.item = data;
      console.log(this.item, 'this.item')
      console.log(data, 'data')
    })

  }

  ngOnInit(): void {
  }

  modifyArticle(id : any, item : any){
    this.router.navigate(['articles', 'edit', id])
  }

  // deleteArticle(id : any){
  //   this.ArticlesServices.deleteArticle(id).subscribe((data : any) => {
  //     // supprimer l'article
  //     this.item = this.item.filter((item : any) => item.id !== id);

  //   })
  }

