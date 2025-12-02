<template>
  <footer class="bg-green-700 text-white text-center py-4 mt-12">
    <div class="max-w-4xl mx-auto">
      <p class="text-sm">© {{ year }} Your School — Built with Vue + Tailwind</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
