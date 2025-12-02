<template>
  <div
    data-slot="card-content"
    :class="cn('px-6 [&:last-child]:pb-6', customClass)"
  >
    <slot />
  </div>
</template>

<script setup>
import { cn } from "../../utils"; // adjust path correctly!

const props = defineProps({
  customClass: {
    type: String,
    default: ""
  }
});
</script>
