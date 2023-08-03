export interface ArticleInterface {
  title: string;
  body: string;
  slug: string;
  author: AuthorInterface;
  tagsNames: string[];
  createdDateTime: string;
}

export interface AuthorInterface {
  id: string;
  fullName: string;
  image: string;
}
