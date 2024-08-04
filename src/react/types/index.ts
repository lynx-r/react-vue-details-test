import { useState } from "react";

export type UseStateType<S> = ReturnType<typeof useState<S>>;

export * from "./react";
