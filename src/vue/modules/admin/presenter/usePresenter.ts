import type { UpdatableState } from "@/core/UpdatableState";
import { useService } from "../service/useService";
import { simpleAdminStore, useAdminStore } from "../store";
import type { State } from "../types";
import type { Presenter } from "./Presenter";
import { PresenterImpl } from "./PresenterImpl";

let PRESENTER: Presenter | null = null;

export const usePresenter = (state?: State): Presenter => {
  // if (!PRESENTER) {
  let store: UpdatableState<State>;
  if (state) {
    store = simpleAdminStore(state);
  } else {
    store = useAdminStore();
  }
  const service = useService({});
  PRESENTER = new PresenterImpl(store, service);
  // }
  return PRESENTER;
};
