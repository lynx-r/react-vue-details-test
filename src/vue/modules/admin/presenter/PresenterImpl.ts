import type { CommonStore } from "@/core/CommonStore";
import { CommonStoreAdapter } from "@/core/CommonStoreAdapter";
import type { Service } from "../service";
import type { State, UserDetailsReq } from "../types";
import type { Presenter } from "./Presenter";

export class PresenterImpl
  extends CommonStoreAdapter<State>
  implements Presenter
{
  constructor(store: CommonStore<State>, private service: Service) {
    super(store);
  }

  get usersDetails() {
    debugger;
    return this.stateValue?.usersDetails || [];
  }

  async onGetUsersDetails(userDetails: UserDetailsReq): Promise<void> {
    const usersDetails = await this.service.getUsersDetails(userDetails);
    this.updateState({ usersDetails });
  }
}
