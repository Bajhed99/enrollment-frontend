<template>
  <div class="min-h-screen bg-white">
    <!-- Navbar -->
    <Navigation />

    <!-- Login Buttons -->
    <div class="absolute top-4 right-4 flex gap-2 z-10">
      <button
        @click="onStudentLogin"
        class="bg-white border border-[#02542D] text-[#02542D] hover:bg-[#02542D] hover:text-white px-4 py-2 rounded-md flex items-center"
      >
        <User class="w-4 h-4 mr-2" />
        Student Login
      </button>

      <button
        @click="onTeacherLogin"
        class="bg-white border border-[#02542D] text-[#02542D] hover:bg-[#02542D] hover:text-white px-4 py-2 rounded-md flex items-center"
      >
        <BookOpen class="w-4 h-4 mr-2" />
        Teacher Login
      </button>

      <button
        @click="onAdminLogin"
        class="bg-white border border-[#02542D] text-[#02542D] hover:bg-[#02542D] hover:text-white px-4 py-2 rounded-md flex items-center"
      >
        <ShieldCheck class="w-4 h-4 mr-2" />
        Admin Login
      </button>
    </div>

    <!-- Sections -->
    <HeroSection @get-started="onStudentLogin" />
    <ProgramsSection @enroll="onStudentLogin" />
    <CTASection @enroll="onStudentLogin" />

    <!-- Footer -->
    <footer class="bg-[#02542D] text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p class="text-[#FCF1FD]">
          © 2024 Banza National High School. All rights reserved.
        </p>
        <p class="text-[#FCF1FD] text-sm mt-2">
          Brgy. Banza, Butuan City, Agusan del Norte, Philippines
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navigation from "../components/Navigation.vue";
import HeroSection from "../components/HeroSection.vue";
import ProgramsSection from "../components/ProgramsSection.vue";
import CTASection from "../components/CTASection.vue";

import { User, ShieldCheck, BookOpen } from "lucide-vue-next";

// FUNCTIONS FOR BUTTON ACTIONS
const onStudentLogin = () => {
  console.log("Student Login clicked");
};

const onTeacherLogin = () => {
  console.log("Teacher Login clicked");
};

const onAdminLogin = () => {
  console.log("Admin Login clicked");
};
</script>
