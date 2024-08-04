import type { CommonStore } from "@/core/CommonStore";
import { useService } from "../service/useService";
import type { State } from "../types";
import type { Presenter } from "./Presenter";
import { PresenterImpl } from "./PresenterImpl";

let PRESENTER: Presenter | null = null;

export const createPresenter = (commonStore: CommonStore<State>): Presenter => {
  // if (!PRESENTER) {

  const service = useService({});
  PRESENTER = new PresenterImpl(commonStore, service);
  // }
  return PRESENTER;
};

export const getPresenter = () => {
  return PRESENTER;
};
