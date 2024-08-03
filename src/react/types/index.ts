import type { CommonStoreInterface } from "@/core/UpdatableState";
import { useState } from "react";

export type UseStateType<S> = ReturnType<typeof useState<S>>;

export type UseStateStore<S> = (s: UseStateType<S>) => CommonStoreInterface<S>;
