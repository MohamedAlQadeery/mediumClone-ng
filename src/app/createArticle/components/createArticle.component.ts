import { Component } from '@angular/core';
import { ArticleFormComponenet } from 'src/app/shared/components/articleForm/components/articleForm.component';
import { ArticleFormValuesInterface } from 'src/app/shared/components/articleForm/types/articleFormValues.interface';

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  standalone: true,
  imports: [ArticleFormComponenet],
})
export class CreateArticleComponenet {
  formInitialValues: ArticleFormValuesInterface = {
    name: '',
    body: '',
    tags: [],
  };

  articleCreated(articleFormValues: ArticleFormValuesInterface) {
    console.log(articleFormValues);
  }
}
