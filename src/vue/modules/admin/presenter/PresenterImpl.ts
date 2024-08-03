import { PresenterStoreAdapter } from "@/core/PresenterStoreAdapter";
import type { UpdatableState } from "@/core/UpdatableState";
import type { Service } from "../service";
import type { State, UserDetailsReq } from "../types";
import type { Presenter } from "./Presenter";

export class PresenterImpl
  extends PresenterStoreAdapter<State>
  implements Presenter
{
  constructor(store: UpdatableState<State>, private service: Service) {
    super(store);
  }

  get usersDetails() {
    return this.state.usersDetails;
  }

  async onGetUsersDetails(userDetails: UserDetailsReq): Promise<void> {
    const usersDetails = await this.service.getUsersDetails(userDetails);
    this.updateState({ usersDetails });
  }
}
