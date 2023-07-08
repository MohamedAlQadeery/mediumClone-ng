export interface AuthResponseInterface {
  Id: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Role: string;
  Token: string;
  Bio: string | null;
  Image: string | null;
}
