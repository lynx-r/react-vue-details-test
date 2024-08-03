import type { UserDetails, UserDetailsReq } from "../types";

export interface Presenter {
  usersDetails: UserDetails[];

  onGetUsersDetails(userDetails: UserDetailsReq): Promise<void>;
}
