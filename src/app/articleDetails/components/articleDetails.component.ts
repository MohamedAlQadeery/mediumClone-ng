import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { articleDetailsActions } from '../store/actions';
import { combineLatest } from 'rxjs';
import {
  selectArticleData,
  selectError,
  selectIsLoading,
} from '../store/reducer';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { TagListComponent } from 'src/app/shared/components/feed/components/tagList.component';
import { ErrorMessageComponent } from 'src/app/shared/components/error-message/error-message.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'mc-article-details',
  templateUrl: './articleDetails.component.html',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent,
    TagListComponent,
    ErrorMessageComponent,
    RouterLink,
  ],
})
export class ArticleDetailsComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}
  id = this.route.snapshot.paramMap.get('id') ?? '';
  imagePath = environment.imagesSmallPath;

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    article: this.store.select(selectArticleData),
  });

  ngOnInit(): void {
    this.store.dispatch(
      articleDetailsActions.getArticleDetails({ id: this.id })
    );
  }
}
