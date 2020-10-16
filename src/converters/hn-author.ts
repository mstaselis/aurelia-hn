import { valueConverter } from 'aurelia-framework';

@valueConverter('author')
export class AuthorValueConverter {
  toView(author: string): string | undefined {
    let returnValue = '';
    if (author) {
      returnValue = `@${author}`;
    }

    return returnValue;
  }
}
