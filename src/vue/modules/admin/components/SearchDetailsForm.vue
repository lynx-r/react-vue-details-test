<template>
  <t-form-group>
    <t-form-label> User details</t-form-label>
    <t-form-text-item>
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="email"
        v-model="email"
      />
    </t-form-text-item>
    <t-form-text-item>
      <label for="userNumber">number</label>
      <input
        id="userNumber"
        type="text"
        placeholder="number"
        v-model="userNumber"
      />
    </t-form-text-item>
    <t-form-button-group>
      <button
        type="button"
        @click="$emit('search')"
      >
        Search
      </button>
    </t-form-button-group>
  </t-form-group>
</template>

<script setup lang="ts">
defineEmits(["search"]);

const email = defineModel("email");
const userNumber = defineModel("userNumber");
</script>
