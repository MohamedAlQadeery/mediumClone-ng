export interface RegisterRequestInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: AddressInterface;
}

export interface AddressInterface {
  street: string;
  city: string;
  state: string;
  zip: string;
}
