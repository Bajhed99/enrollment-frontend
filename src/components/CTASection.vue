<script setup>
import { ArrowRight, Phone, Mail, MapPin } from "lucide-vue-next";
import Button from "./ui/Button.vue";

const props = defineProps({
  onEnroll: {
    type: Function,
    required: true
  }
});
</script>

<template>
  <div class="bg-white py-16">
    <div class="container mx-auto px-4">
      <div class="bg-gradient-to-br from-[#02542D] to-[#034a27] rounded-2xl p-12 text-white">
        
        <div class="grid md:grid-cols-2 gap-8 items-center">

          <!-- LEFT -->
          <div>
            <h2 class="text-white mb-4">Ready to Join Our Community?</h2>
            <p class="text-[#FCF1FD] mb-6">
              Start your enrollment today and become part of Banza National High School's legacy 
              of excellence in education.
            </p>

            <Button
              size="lg"
              class="bg-[#FCF1FD] text-[#02542D] hover:bg-white"
              @click="props.onEnroll"
            >
              Enroll Now
              <ArrowRight class="ml-2 w-5 h-5" />
            </Button>
          </div>

          <!-- RIGHT -->
          <div class="space-y-4">
            <h3 class="text-white mb-4">Contact Information</h3>

            <div class="flex items-start gap-3">
              <MapPin class="w-5 h-5 text-[#FCF1FD] mt-1 flex-shrink-0" />
              <div>
                <p class="text-[#FCF1FD]">Brgy. Banza, Butuan City</p>
                <p class="text-[#FCF1FD]">Agusan del Norte, Philippines</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <Phone class="w-5 h-5 text-[#FCF1FD] flex-shrink-0" />
              <p class="text-[#FCF1FD]">(085) 123-4567</p>
            </div>

            <div class="flex items-center gap-3">
              <Mail class="w-5 h-5 text-[#FCF1FD] flex-shrink-0" />
              <p class="text-[#FCF1FD]">info@banzanhs.edu.ph</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>
