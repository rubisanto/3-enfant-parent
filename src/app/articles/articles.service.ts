import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http : HttpClient) { }

  getArticles(){
    return this.http.get('http://localhost:3000/articles');
  }

  // deleteArticle(id : any){
  //   return this.http.delete(`http://localhost:3000/articles/${id}`);
  // }

  // modifyArticle(id : any, item : any){
  //   return this.http.put(`http://localhost:3000/articles/${id}`, item);
  // }

  submitArticle(item : any){
    return this.http.post('http://localhost:3000/articles', item);
  }

}
