<template>
  <p
    data-slot="card-description"
    :class="cn('text-muted-foreground', className)"
  >
    <slot />
  </p>
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
