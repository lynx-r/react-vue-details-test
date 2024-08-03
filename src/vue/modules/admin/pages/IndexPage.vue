<template>
  <SearchDetailsForm
    v-model:email="email"
    v-model:user-number="userNumber"
    @search="search"
  />
  {{ email }}{{ userNumber }}
  <DisplayUserDetails
    title="Reactive store"
    :users-details="usersDetails"
  />
  <DisplayUserDetails
    title="Pinia store"
    :users-details="usersDetailsPinia"
  />
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

import DisplayUserDetails from "../components/DisplayUserDetails.vue";
import SearchDetailsForm from "../components/SearchDetailsForm.vue";
import { initState, usePresenter } from "../presenter";
import { UserDetailsReq } from "../types";

const email = ref("john.doe@example.com");
const userNumber = ref("0");

const state = reactive(initState());
const presenter = usePresenter(state);
const { usersDetails } = presenter;
const presenterPinia = usePresenter();
const { usersDetails: usersDetailsPinia } = presenterPinia;

async function search() {
  const userDetailsReq: UserDetailsReq = {
    email: email.value,
    userNumber: userNumber.value,
  };
  await presenter.onGetUsersDetails(userDetailsReq);
  await presenterPinia.onGetUsersDetails(userDetailsReq);
}
</script>
