import { UserDetails, UserDetailsReq } from "../types";

export interface Service {
  getUsersDetails(user: UserDetailsReq): Promise<UserDetails[]>;
}
