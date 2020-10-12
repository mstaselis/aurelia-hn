import { bindable } from 'aurelia-framework';
import { HnArticleLModel } from "models/hn-article-model";

export class HnArticle {
  @bindable
  article: HnArticleLModel;
}
