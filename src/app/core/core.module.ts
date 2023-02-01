import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { UiComponent } from '../ui/components/ui/ui.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    UiModule,
    HeaderComponent
  ]
})
export class CoreModule { }
