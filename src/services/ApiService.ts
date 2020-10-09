import { HnArticleLModel } from 'models/hn-article-model';

export class ApiService {
  get getArticles(): HnArticleLModel[] {
    const dummyModel = new HnArticleLModel();
    dummyModel.by = 'Test';

    return [dummyModel];
  }
}
