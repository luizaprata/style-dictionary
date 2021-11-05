import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { HeadlineService, HeadlinesApiResponse } from './headline.service';

@Injectable({
  providedIn: 'root',
})
export class HeadlineResolver
  implements Resolve<Observable<HeadlinesApiResponse>> {
  constructor(private service: HeadlineService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<HeadlinesApiResponse> {
    
    console.log(":?::::::")
    return this.service.listHeadlines();
    
  }
}