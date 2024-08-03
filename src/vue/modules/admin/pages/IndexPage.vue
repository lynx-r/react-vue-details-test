<template>
  <SearchDetailsForm
    v-model:email="email"
    v-model:user-number="userNumber"
    @search="search"
  />
  <DisplayUserDetails
    title="Reactive store"
    :users-details="presenterReactive.usersDetails"
  />
  <DisplayUserDetails
    title="Ref store"
    :users-details="presenterRef.usersDetails"
  />
  <DisplayUserDetails
    title="Pinia store"
    :users-details="presenterPinia.usersDetails"
  />
  {{ usersDetails }}
</template>

<script setup lang="ts">
import { ref } from "vue";

import DisplayUserDetails from "../components/DisplayUserDetails.vue";
import SearchDetailsForm from "../components/SearchDetailsForm.vue";
import { DEFAULT_USER_DETAILS } from "../constants";
import { createPresenter } from "../presenter";
import { createReactiveStore, createRefStore, usePiniaStore } from "../store";
import { UserDetailsReq } from "../types";

const email = ref(DEFAULT_USER_DETAILS.email);
const userNumber = ref(DEFAULT_USER_DETAILS.userNumber);

const reactiveStore = createReactiveStore();
const presenterReactive = createPresenter(reactiveStore, "value");

const refStore = createRefStore();
const presenterRef = createPresenter(refStore, "value");

const currentStore = usePiniaStore();
const presenterPinia = createPresenter(currentStore);
const usersDetails = presenterPinia.usersDetails;

async function search() {
  const userDetailsReq: UserDetailsReq = {
    email: email.value,
    userNumber: userNumber.value,
  };
  await presenterReactive.onGetUsersDetails(userDetailsReq);
  await presenterRef.onGetUsersDetails(userDetailsReq);
  await presenterPinia.onGetUsersDetails(userDetailsReq);
}
</script>
