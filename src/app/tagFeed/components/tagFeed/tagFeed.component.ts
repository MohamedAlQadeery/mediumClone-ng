import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { FeedTogglerComponent } from 'src/app/shared/components/feed-toggler/feed-toggler.component';
import { FeedComponent } from 'src/app/shared/components/feed/feed.component';
import { PopularTagsComponent } from 'src/app/shared/components/popular-tags/popular-tags.component';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tagFeed.component.html',
  standalone: true,
  imports: [
    FeedComponent,
    BannerComponent,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
})
export class TagFeedComponent implements OnInit {
  apiUrl = '';
  tagName = '';

  constructor(private _activeRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params) => {
      this.tagName = params['tagName'];
      this.apiUrl = `/articles/tag/${this.tagName}`;

      console.log(this.tagName);
      console.log(this.apiUrl);
    });
  }
}
