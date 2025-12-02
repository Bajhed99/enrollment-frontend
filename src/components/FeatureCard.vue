<template>
  <div class="bg-white rounded-xl shadow p-6 text-left">
    <div class="text-2xl mb-3" v-if="icon">{{ icon }}</div>
    <h3 class="font-semibold text-lg mb-1">{{ title }}</h3>
    <p class="text-sm text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: { type: String, default: '' }
})
</script>
