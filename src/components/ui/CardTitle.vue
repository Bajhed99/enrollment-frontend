<template>
  <h4
    data-slot="card-title"
    :class="cn('leading-none', customClass)"
  >
    <slot />
  </h4>
</template>

<script setup>
import { cn } from "../utils";

const props = defineProps({
  customClass: {
    type: String,
    default: "",
  },
});
</script>
