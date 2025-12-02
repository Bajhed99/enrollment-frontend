<!-- src/components/Navbar.vue -->
<template>
  <nav class="bg-[#02542D] text-white shadow-md">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        
        <!-- LEFT SIDE (Logo + Text) -->
        <div class="flex items-center gap-3">
          <GraduationCap class="w-8 h-8" />
          <div>
            <h1 class="text-white">Banza National High School</h1>
            <p class="text-[#FCF1FD] text-sm">
              Brgy. Banza, Butuan City, Philippines
            </p>
          </div>
        </div>

        <!-- RIGHT SIDE (User + Logout) -->
        <div v-if="user" class="flex items-center gap-4">
          <span class="text-[#FCF1FD]">Welcome, {{ user.firstName }}</span>

          <button
            @click="onLogout"
            class="bg-transparent border border-[#FCF1FD] text-[#FCF1FD] 
                   hover:bg-[#FCF1FD] hover:text-[#02542D] 
                   px-3 py-1 rounded flex items-center gap-2"
          >
            <LogOut class="w-4 h-4" />
            Logout
          </button>
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue'
import { GraduationCap, LogOut } from 'lucide-vue-next'

const props = defineProps({
  user: {
    type: Object,
    default: null
  },
  onLogout: {
    type: Function,
    default: () => {}
  }
})
</script>
