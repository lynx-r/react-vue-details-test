import { UserDetails } from "./domain";

export interface State {
  usersDetails: UserDetails[];
}

export type VuexState = { value: State };
export type VuexAdminState = { admin: { value: State } };
