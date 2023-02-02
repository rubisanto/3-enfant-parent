import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../../articles.service';

@Component({
  selector: 'app-page-add-articles',
  templateUrl: './page-add-articles.component.html',
  styleUrls: ['./page-add-articles.component.scss']
})
export class PageAddArticlesComponent implements OnInit {
  public title !: string;
  public content !: string;
  public category !: string;

  constructor(private ArticlesServices : ArticlesService , private router : Router) {  }

  ngOnInit(): void {
  }


  // transmettre les champs et utiliser le service pour envoyer les données
  // vers le serveur
   public submitArticle(obj : any) : void{
    this.ArticlesServices.submitArticle(obj).subscribe((data : any) => {
      console.log(data, 'data')
      this.router.navigate(['articles', 'list'])

    })
    // subscribe l'item

  }

}
