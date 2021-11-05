import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineListComponent } from './headline-list/headline-list.component';
import { HeadlineService } from './headline.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeadlineListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
  ]
})
export class HeadlineModule { }
