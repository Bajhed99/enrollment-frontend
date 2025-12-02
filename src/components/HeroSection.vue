<template>
  <section class="bg-[#FCF1FD] py-20">
    <div class="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
      
      <!-- LEFT: Text -->
      <div>
        <h1 class="text-4xl md:text-5xl font-bold text-[#02542D] leading-tight mb-6">
          Quality Education for Every Learner
        </h1>

        <p class="text-gray-700 text-lg mb-8 max-w-md">
          Enroll now and be part of a learning community that nurtures academic excellence and personal growth.
        </p>

        <div class="flex gap-4">
          <Button class="bg-[#02542D] text-white hover:bg-[#01381F]">
            Enroll Now
          </Button>

          <Button variant="outline" class="border-[#02542D] text-[#02542D] hover:bg-[#02542D] hover:text-white">
            Learn More
          </Button>
        </div>
      </div>

      <!-- RIGHT: Image -->
      <div class="flex justify-center">
        <img
          src="/hero-illustration.png"
          alt="School illustration"
          class="w-full max-w-md"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "@/components/ui/button/Button.vue";
</script>

<style scoped></style>
