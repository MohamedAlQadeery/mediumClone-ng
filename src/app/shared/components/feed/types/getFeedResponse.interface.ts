import { ArticleInterface } from '../../../types/article.interface';

export interface GetFeedResponseInterface {
  articles: ArticleInterface[];
  count: number;
}
