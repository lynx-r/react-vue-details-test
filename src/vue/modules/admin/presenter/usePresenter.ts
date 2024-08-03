import type { CommonStoreInterface } from "@/core/CommonStoreInterface";
import { StoreAccessor } from "@/vue/types";
import { useService } from "../service/useService";
import type { State } from "../types";
import type { Presenter } from "./Presenter";
import { PresenterImpl } from "./PresenterImpl";

let PRESENTER: Presenter | null = null;

export const createPresenter = (
  commonStore: CommonStoreInterface<State>,
  storeAccessor?: StoreAccessor
): Presenter => {
  // if (!PRESENTER) {

  const service = useService({});
  PRESENTER = new PresenterImpl(commonStore, service, storeAccessor);
  // }
  return PRESENTER;
};

export const getPresenter = () => {
  return PRESENTER;
};
