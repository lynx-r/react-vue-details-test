<template>
  <div>
    <label>{{ title }}</label>
    <ul>
      <li
        v-for="userDetails in usersDetails"
        :key="userDetails.id"
      >
        {{ userDetails.email }}:
        {{ userDetails.userNumber }}
      </li>
    </ul>
    <label>Found users: {{ usersDetails.length }} </label>
  </div>
</template>

<script setup lang="ts">
import { UserDetails } from "../types";
defineProps<{
  usersDetails: UserDetails[];
  title: string;
}>();
</script>
