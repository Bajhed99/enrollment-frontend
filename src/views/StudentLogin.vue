<template>
  <div class="min-h-screen bg-gradient-to-br from-[#02542D] to-[#034a27] flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="flex justify-center mb-4">
          <div class="bg-[#FCF1FD] p-4 rounded-full">
            <GraduationCap class="w-12 h-12 text-[#02542D]" />
          </div>
        </div>
        <h1 class="text-white mb-2">Banza National High School</h1>
        <p class="text-[#FCF1FD]">Student Portal</p>
      </div>

      <Card class="p-6">
        <Tabs v-model="activeTab">
          <TabsList class="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <!-- LOGIN TAB -->
          <TabsContent value="login">
            <form @submit.prevent="handleLogin" class="space-y-4">
              <div class="space-y-2">
                <Label for="email">Email Address</Label>
                <Input
                  v-model="login.email"
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                />
              </div>

              <div class="space-y-2">
                <Label for="password">Password</Label>
                <Input
                  v-model="login.password"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>

              <Button
                type="submit"
                class="w-full bg-[#02542D] hover:bg-[#034a27]"
                :disabled="isLoading"
              >
                <LogIn class="w-4 h-4 mr-2" />
                {{ isLoading ? "Logging in..." : "Login" }}
              </Button>
            </form>
          </TabsContent>

          <!-- SIGNUP TAB -->
          <TabsContent value="signup">
            <form @submit.prevent="handleSignup" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <Label for="firstName">First Name</Label>
                  <Input
                    v-model="signup.firstName"
                    id="firstName"
                    placeholder="Juan"
                  />
                </div>

                <div class="space-y-2">
                  <Label for="lastName">Last Name</Label>
                  <Input
                    v-model="signup.lastName"
                    id="lastName"
                    placeholder="Dela Cruz"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <Label for="signupEmail">Email Address</Label>
                <Input
                  v-model="signup.email"
                  id="signupEmail"
                  type="email"
                  placeholder="your.email@example.com"
                />
              </div>

              <div class="space-y-2">
                <Label for="contact">Contact Number</Label>
                <Input
                  v-model="signup.contactNumber"
                  id="contact"
                  placeholder="+63 912 345 6789"
                />
              </div>

              <div class="space-y-2">
                <Label for="signupPassword">Password</Label>
                <Input
                  v-model="signup.password"
                  id="signupPassword"
                  type="password"
                  placeholder="Create a password"
                />
              </div>

              <div class="space-y-2">
                <Label for="confirmPassword">Confirm Password</Label>
                <Input
                  v-model="signup.confirmPassword"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>

              <Button
                type="submit"
                class="w-full bg-[#02542D] hover:bg-[#034a27]"
                :disabled="isLoading"
              >
                <UserPlus class="w-4 h-4 mr-2" />
                {{ isLoading ? "Creating Account..." : "Create Account" }}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </Card>

      <!-- BACK BUTTON -->
      <div class="text-center mt-6">
        <Button
          variant="link"
          @click="onBack"
          class="text-[#FCF1FD] hover:text-white"
        >
          ← Back to Home
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { toast } from "vue-sonner";
import { signIn, signUp } from "../utils/api";

import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

import { LogIn, UserPlus, GraduationCap } from "lucide-vue-next";

const props = defineProps({
  onLoginSuccess: Function,
  onBack: Function,
});

// FORM STATES
const activeTab = ref("login");
const isLoading = ref(false);

const login = ref({
  email: "",
  password: "",
});

const signup = ref({
  firstName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  password: "",
  confirmPassword: "",
});

// LOGIN
const handleLogin = async () => {
  isLoading.value = true;

  try {
    await signIn(login.value.email, login.value.password);
    toast.success("Login successful!");
    props.onLoginSuccess();
  } catch (err) {
    toast.error(err?.message || "Login failed");
  } finally {
    isLoading.value = false;
  }
};

// SIGNUP
const handleSignup = async () => {
  if (signup.value.password !== signup.value.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  isLoading.value = true;
  try {
    await signUp(
      signup.value.email,
      signup.value.password,
      signup.value.firstName,
      signup.value.lastName,
      signup.value.contactNumber
    );

    await signIn(signup.value.email, signup.value.password);

    toast.success("Account created successfully!");
    props.onLoginSuccess();
  } catch (err) {
    toast.error(err?.message || "Signup failed");
  } finally {
    isLoading.value = false;
  }
};
</script>
