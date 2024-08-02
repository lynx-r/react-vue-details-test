<template>
  <DetailsForm
    v-model:email="email"
    v-model:user-number="userNumber"
    @search="search"
  />
  {{ email }}{{ userNumber }}
</template>

<script setup lang="ts">
import { ref } from "vue";

import DetailsForm from "../components/DetailsForm.vue";

const email = ref("john.doe@example.com");
const userNumber = ref("0");

function search() {
  console.log(email.value, userNumber.value);
}
</script>
