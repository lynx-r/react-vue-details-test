<template>
  <t-module-header>Admin module</t-module-header>
  <SearchDetailsForm
    v-model:email="email"
    v-model:user-number="userNumber"
    @search="search"
  />
  <div class="flex">
    <div>
      <DisplayUserDetails
        title="Reactive store"
        :users-details="presenterReactive.usersDetails"
      />
      <DisplayUserDetails
        title="Ref store"
        :users-details="presenterRef.usersDetails"
      />
    </div>
    <div>
      <DisplayUserDetails
        title="Pinia store"
        :users-details="presenterPinia.usersDetails"
      />
      <DisplayUserDetails
        title="Vuex store"
        :users-details="presenterVuex.usersDetails"
      />
      <!-- <DisplayUserDetails
        title="Redux store"
        :users-details="presenterRedux.usersDetails"
      /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// import createReduxStore from "@/react/modules/admin/store/createReduxStore";
import DisplayUserDetails from "../components/DisplayUserDetails.vue";
import SearchDetailsForm from "../components/SearchDetailsForm.vue";
import { DEFAULT_USER_DETAILS } from "../constants";
import { createPresenter } from "../presenter";
import {
  createReactiveStore,
  createRefStore,
  createVuexStore,
  usePiniaStore,
} from "../store";
import { UserDetailsReq } from "../types";

const email = ref(DEFAULT_USER_DETAILS.email);
const userNumber = ref(DEFAULT_USER_DETAILS.userNumber);

const reactiveStore = createReactiveStore();
const presenterReactive = createPresenter(reactiveStore);

const refStore = createRefStore();
const presenterRef = createPresenter(refStore);

const currentStore = usePiniaStore();
const presenterPinia = createPresenter(currentStore);

const vuexStore = createVuexStore();
const presenterVuex = createPresenter(vuexStore);

// context error
// const reduxStore = createReduxStore();
// const presenterRedux = createPresenter(reduxStore);

async function search() {
  const userDetailsReq: UserDetailsReq = {
    email: email.value,
    userNumber: userNumber.value,
  };
  await presenterReactive.onGetUsersDetails(userDetailsReq);
  await presenterRef.onGetUsersDetails(userDetailsReq);
  await presenterPinia.onGetUsersDetails(userDetailsReq);
  await presenterVuex.onGetUsersDetails(userDetailsReq);
  // await presenterRedux.onGetUsersDetails(userDetailsReq);
}
</script>
