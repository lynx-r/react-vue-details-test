import { random, uniqueId } from "lodash";
import { UserDetails } from "./types";

export const randomUserNumber = () =>
  `${random(10, 99)}-${random(10, 99)}-${random(10, 99)}`;

export const randomEmail = () => `${uniqueId()}@example.com`;

export const randomUser = (): UserDetails => {
  return {
    id: random(1000),
    userNumber: randomUserNumber(),
    email: randomEmail(),
  };
};
