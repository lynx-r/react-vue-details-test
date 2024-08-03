export type Email = string;
export type UserNumber = string;

export interface UserDetails {
  email: Email;
  userNumber: UserNumber;
}

export type UserDetailsReq = UserDetails;

export type User = UserDetails;

export interface UsersResponse {
  count: number;
  users: User[];
}
