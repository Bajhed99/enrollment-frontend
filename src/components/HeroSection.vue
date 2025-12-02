<template>
  <div class="bg-gradient-to-br from-[#02542D] to-[#034a27] text-white">
    <div class="container mx-auto px-4 py-20">
      <div class="grid md:grid-cols-2 gap-12 items-center">

        <!-- LEFT SIDE -->
        <div>
          <h1 class="text-white mb-4">
            Welcome to Banza National High School
          </h1>

          <p class="text-[#FCF1FD] text-xl mb-8">
            Empowering students with quality education and shaping future leaders
            in Brgy. Banza, Butuan City.
          </p>

          <!-- Button -->
          <Button
            size="lg"
            class="bg-[#FCF1FD] text-[#02542D] hover:bg-white"
            @click="onGetStarted"
          >
            Start Your Enrollment
            <ArrowRight class="ml-2 w-5 h-5" />
          </Button>

          <!-- 3 Quick Stats -->
          <div class="grid grid-cols-3 gap-6 mt-12">
            <div class="text-center">
              <div class="bg-[#FCF1FD]/20 rounded-lg p-4 mb-2">
                <Users class="w-8 h-8 mx-auto text-[#FCF1FD]" />
              </div>
              <p class="text-[#FCF1FD]">2000+ Students</p>
            </div>

            <div class="text-center">
              <div class="bg-[#FCF1FD]/20 rounded-lg p-4 mb-2">
                <BookOpen class="w-8 h-8 mx-auto text-[#FCF1FD]" />
              </div>
              <p class="text-[#FCF1FD]">Quality Programs</p>
            </div>

            <div class="text-center">
              <div class="bg-[#FCF1FD]/20 rounded-lg p-4 mb-2">
                <Award class="w-8 h-8 mx-auto text-[#FCF1FD]" />
              </div>
              <p class="text-[#FCF1FD]">Excellence</p>
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="relative">
          <div class="bg-[#FCF1FD]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#FCF1FD]/20">
            <h3 class="text-white mb-4">Quick Enrollment Steps</h3>

            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <div class="bg-[#FCF1FD] text-[#02542D] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <span class="text-[#FCF1FD]">Create your student account</span>
              </li>

              <li class="flex items-start gap-3">
                <div class="bg-[#FCF1FD] text-[#02542D] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <span class="text-[#FCF1FD]">Choose your grade level and strand</span>
              </li>

              <li class="flex items-start gap-3">
                <div class="bg-[#FCF1FD] text-[#02542D] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <span class="text-[#FCF1FD]">Submit required documents</span>
              </li>

              <li class="flex items-start gap-3">
                <div class="bg-[#FCF1FD] text-[#02542D] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  4
                </div>
                <span class="text-[#FCF1FD]">Track your application status</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "./ui/Button.vue";

// icons in Vue (lucide-vue-next)
import { ArrowRight, BookOpen, Users, Award } from "lucide-vue-next";

// props
const props = defineProps<{
  onGetStarted: () => void;
}>();
</script>