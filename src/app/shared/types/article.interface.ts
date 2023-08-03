export interface ArticleInterface {
  Title: string;
  Body: string;
  Slug: string;
  Author: AuthorInterface;
  TagsNames: string[];
  CreatedDateTime: string;
}

export interface AuthorInterface {
  Id: string;
  FullName: string;
  Image: string;
}
