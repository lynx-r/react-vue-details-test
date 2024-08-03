export type ID = number;
export type Email = string;
export type UserNumber = string;

export interface UserDetails {
  id: ID;
  email: Email;
  userNumber: UserNumber;
}

export type UserDetailsReq = Omit<UserDetails, "id">;

export type User = UserDetails;

export interface UsersResponse {
  count: number;
  users: User[];
}
