import { ApiService } from './../services/ApiService';
import { inject } from 'aurelia-dependency-injection';
import { HnArticleLModel } from './../models/hn-article-model';

@inject(ApiService)
export class HnArticleList {
  articles: HnArticleLModel[];

  constructor(private service: ApiService) { }

  created() {
    this.articles = this.service.getArticles;
  }
}
