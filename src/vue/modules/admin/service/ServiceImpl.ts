import { delayAsync } from "@/helpers";
import { UserDetails, UserDetailsReq } from "../types";
import type { Service } from "./Service";
import { mapUserDetails } from "./mappers";

export class ServiceImpl implements Service {
  #usersDetails: UserDetails[] = [];

  constructor(_apiConfig: any) {}

  async getUsersDetails(userDetails: UserDetailsReq) {
    await delayAsync();
    this.#usersDetails.push(userDetails);
    return this.#usersDetails.map(mapUserDetails);
  }
}
