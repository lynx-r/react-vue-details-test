import type { CommonStoreInterface } from "@/core/CommonStoreInterface";
import { CommonStoreAdapter } from "@/core/PresenterStoreAdapter";
import { StoreAccessor } from "@/vue/types";
import type { Service } from "../service";
import type { State, UserDetailsReq } from "../types";
import type { Presenter } from "./Presenter";

export class PresenterImpl
  extends CommonStoreAdapter<State>
  implements Presenter
{
  constructor(
    store: CommonStoreInterface<State>,
    private service: Service,
    private storeAccessor?: StoreAccessor
  ) {
    super(store);
  }

  protected get innerState(): State {
    if (this.storeAccessor) {
      return (this._state as any)[this.storeAccessor];
    }
    return this._state;
  }

  get usersDetails() {
    return this.innerState.usersDetails;
  }

  async onGetUsersDetails(userDetails: UserDetailsReq): Promise<void> {
    const usersDetails = await this.service.getUsersDetails(userDetails);
    this.updateState({ usersDetails });
  }
}
