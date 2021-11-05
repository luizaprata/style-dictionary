import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlineListComponent } from './headline/headline-list/headline-list.component';
import { HeadlineResolver } from './headline/headline.resolver';

const routes: Routes = [
  {
    path: '',
    component: HeadlineListComponent,
    resolve: { articles: HeadlineResolver },
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
