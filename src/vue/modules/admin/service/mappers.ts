import type { UserDetails } from "../types";

// make some server side fields more appropriate for frontend. E.g. format date

export const mapUserDetails = (user: UserDetails): UserDetails => ({
  ...user,
});
