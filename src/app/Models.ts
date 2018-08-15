// import{ AuthenticationService } from '../authentication.service';

export class User {
  id: String;
  first_name: String;
  last_name: String;
  email: String;
  avatar: URL;
  exp: number;
  iat: number;
  rents: Array<string>;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  deleted: Boolean;
}

export class Passwords {
  new_password: String;
  prev_password: String;
}

export class TokenPayload {
  email: String;
  password: String;
  first_name: String;
  last_name: String;
}

export class Rent {
  user_id: String;
  address: Address;
  price: Number;
  beds: Number;
  baths: Number;
  imgs: Array<string>;
  description: String;
}

export class Address {
  formated: String;
  lat: String;
  lng: String;
}
