<template>
  <div
    data-slot="card-action"
    :class="cn(
      'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
      className
    )"
  >
    <slot />
  </div>
</template>

<script setup>
import { cn } from "../utils";

const props = defineProps({
  className: {
    type: String,
    default: "",
  },
});
</script>
