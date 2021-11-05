import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const POKE_API = 'https://newsapi.org/v2';

export type List = {
  name: string;
  url: string;
};
export interface Source {
  id: string;
  name: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface HeadlinesApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

@Injectable({
  providedIn: 'root',
})
export class HeadlineService {
  constructor(private http: HttpClient) {}

  listHeadlines(): Observable<HeadlinesApiResponse> {
    return this.http.get<HeadlinesApiResponse>(
      `${POKE_API}/top-headlines/?country=br&apiKey=6e402f83105a483a804f4ff33d40dd2e`
    );
  }
}
