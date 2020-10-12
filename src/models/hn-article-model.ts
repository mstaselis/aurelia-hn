import { HnArticleType } from './hn-article-type';
import { computedFrom } from 'aurelia-framework';

export class HnArticleLModel {

  public by: string;

  public descendants: number;

  public kids: number[];

  public score: number;

  public time: number;

  public title: string; 

  public type: HnArticleType;

  public url: string;

  @computedFrom('kids')
  get commentCount() {
    return this.kids ? this.kids.length : 0;
  }
}
