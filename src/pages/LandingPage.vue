<script setup>
import Button from "@/components/ui/Button.vue";
import HeroSection from "@/components/HeroSection.vue";
import ProgramsSection from "@/components/ProgramsSection.vue";
</script>

<template>
  <!-- Hero Section -->
  <HeroSection />

  <!-- Programs Section -->
  <ProgramsSection />

  <!-- Or imong custom nga hero mao ni -->
  <section class="bg-[#FCF1FD] min-h-screen flex items-center">
    <div class="container mx-auto px-6 text-center">

      <h1 class="text-4xl md:text-6xl font-bold text-[#02542D] mb-6">
        Enrollment System
      </h1>

      <p class="text-gray-700 max-w-2xl mx-auto mb-8">
        A simple and efficient platform for managing students, classes,
        courses, and enrollment processes.
      </p>

      <div class="flex justify-center gap-4">
        <Button
          class="bg-[#02542D] text-white hover:bg-[#013f21]"
          @click="$router.push('/login')"
        >
          Login
        </Button>

        <Button
          variant="outline"
          class="border-[#02542D] text-[#02542D] hover:bg-[#02542D] hover:text-white"
        >
          Learn More
        </Button>
      </div>

    </div>
  </section>
</template>
