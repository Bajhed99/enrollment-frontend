<script setup>
import { ref } from "vue";
import Card from "./ui/Card.vue";
import Button from "./ui/Button.vue";

import { BookOpen, Microscope, Calculator, Users } from "lucide-vue-next";

const props = defineProps({
  onEnroll: {
    type: Function,
    required: true,
  },
});

const programs = ref([
  {
    title: "Junior High School",
    grades: "Grades 7–10",
    description:
      "Build a strong foundation with our comprehensive junior high school curriculum aligned with DepEd standards.",
    icon: BookOpen,
    color: "bg-blue-500",
  },
  {
    title: "STEM Strand",
    grades: "Grades 11–12",
    description:
      "Science, Technology, Engineering, and Mathematics track for students pursuing technical and scientific careers.",
    icon: Microscope,
    color: "bg-purple-500",
  },
  {
    title: "ABM Strand",
    grades: "Grades 11–12",
    description:
      "Accountancy, Business, and Management for future entrepreneurs and business professionals.",
    icon: Calculator,
    color: "bg-green-500",
  },
  {
    title: "HUMSS Strand",
    grades: "Grades 11–12",
    description:
      "Humanities and Social Sciences for students interested in social work, education, and liberal arts.",
    icon: Users,
    color: "bg-orange-500",
  },
]);
</script>

<template>
  <div class="bg-[#FCF1FD] py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-[#02542D] mb-4">Our Academic Programs</h2>
        <p class="text-gray-700 max-w-2xl mx-auto">
          Choose from our diverse range of academic programs designed to prepare
          students for their future careers and higher education.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          v-for="(program, index) in programs"
          :key="index"
          class="p-6 hover:shadow-lg transition-shadow"
        >
          <div
            :class="program.color"
            class="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          >
            <component :is="program.icon" class="w-6 h-6 text-white" />
          </div>

          <h3 class="text-[#02542D] mb-2">{{ program.title }}</h3>

          <p class="text-sm text-gray-600 mb-3">{{ program.grades }}</p>

          <p class="text-gray-700 text-sm mb-4">
            {{ program.description }}
          </p>

          <Button
            variant="outline"
            size="sm"
            class="w-full border-[#02542D] text-[#02542D] hover:bg-[#02542D] hover:text-white"
            @click="props.onEnroll"
          >
            Learn More
          </Button>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
