import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Subscription } from 'rxjs';
import { Article, HeadlinesApiResponse } from '../headline.service';

@Component({
  selector: 'app-headline-list',
  templateUrl: './headline-list.component.html',
  styleUrls: ['./headline-list.component.scss']
})
export class HeadlineListComponent implements OnInit {

  articles: Article[] = [];
  articlesSubscription?: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.articlesSubscription = this.activatedRoute.data.subscribe(
      (data) => {
        this.articles = data['articles'].articles
      }
    );
  }
}
