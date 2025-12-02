<template>
  <div
    data-slot="card-footer"
    :class="cn('flex items-center px-6 pb-6 [.border-t]:pt-6', className)"
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
