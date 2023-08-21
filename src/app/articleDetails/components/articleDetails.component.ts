import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { articleDetailsActions } from '../store/actions';

@Component({
  selector: 'mc-article-details',
  templateUrl: './articleDetails.component.html',
  standalone: true,
})
export class ArticleDetailsComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}
  id = this.route.snapshot.paramMap.get('id') ?? '';

  ngOnInit(): void {
    this.store.dispatch(
      articleDetailsActions.getArticleDetails({ id: this.id })
    );
  }
}
