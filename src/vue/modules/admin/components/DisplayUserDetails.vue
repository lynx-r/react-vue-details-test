<template>
  <t-display-card>
    <t-label>{{ title }}</t-label>
    <ul>
      <li
        v-for="userDetails in usersDetails"
        :key="userDetails.id"
      >
        {{ userDetails.email }}:
        {{ userDetails.userNumber }}
      </li>
    </ul>
    <t-label-info>Found users: {{ usersDetails.length }} </t-label-info>
  </t-display-card>
</template>

<script setup lang="ts">
import { UserDetails } from "../types";
defineProps<{
  usersDetails: UserDetails[];
  title: string;
}>();
</script>
