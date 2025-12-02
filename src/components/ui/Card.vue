<template>
  <div
    data-slot="card"
    :class="cn(
      'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border',
      className
    )"
    v-bind="attrs"
  >
    <slot />
  </div>
</template>

<script setup>
import { useAttrs } from "vue";
import { cn } from "../../utils";

const props = defineProps({
  className: {
    type: String,
    default: "",
  },
});

const attrs = useAttrs();
</script>
