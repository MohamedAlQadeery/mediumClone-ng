export interface CurrentUserInterface {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  token: string;
  bio: string | null;
  image: string | null;
}
