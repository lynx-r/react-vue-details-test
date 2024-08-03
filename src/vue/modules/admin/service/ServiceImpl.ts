import { random } from "lodash";
import { randomUser } from "../helpers";
import { UserDetailsReq } from "../types";
import type { Service } from "./Service";
import { mapUserDetails } from "./mappers";

export class ServiceImpl implements Service {
  constructor(_apiConfig: any) {}

  async getUsersDetails(_userDetails: UserDetailsReq) {
    // console.log("getting user by", userDetails);
    // await delayAsync();
    const usersCount = random(2, 10);
    const foundUsers = [...Array(usersCount)].map(() => randomUser());
    return foundUsers.map(mapUserDetails);
  }
}
