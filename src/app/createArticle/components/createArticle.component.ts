import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticleFormComponenet } from 'src/app/shared/components/articleForm/components/articleForm.component';
import { ArticleFormValuesInterface } from 'src/app/shared/components/articleForm/types/articleFormValues.interface';
import { CreateArticleRequest } from 'src/app/shared/types/createArticleRequest.interface';
import { createArticleActions } from '../store/actions';
import { combineLatest } from 'rxjs';
import { selectErrors, selectIsSubmitting } from '../store/reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  standalone: true,
  imports: [ArticleFormComponenet, CommonModule],
})
export class CreateArticleComponenet {
  formInitialValues: ArticleFormValuesInterface = {
    title: '',
    body: '',
    selectedTags: [],
  };

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    errors: this.store.select(selectErrors),
  });

  constructor(private store: Store) {}
  articleCreated(articleFormValues: ArticleFormValuesInterface) {
    const request: CreateArticleRequest = {
      title: articleFormValues.title,
      body: articleFormValues.title,
      tagsId: articleFormValues.selectedTags.map((tag) => Number(tag)),
    };

    console.log(request);

    this.store.dispatch(createArticleActions.createArticle({ request }));
  }
}
