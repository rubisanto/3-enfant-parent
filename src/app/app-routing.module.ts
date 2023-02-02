import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // quand il n'y a rien afficher le module articles
    path: '',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
  },
  // pour le add
  {
    path: 'add',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
