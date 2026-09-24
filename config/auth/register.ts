// config/auth/register.ts

import { AuthConfig } from "@/types/auth/auth.types";

export const registerConfig: AuthConfig = {
  mode: "register",

  title: "Create Your Account",
  subtitle: "Join thousands of students and mentors",

  roleOptions: [
    {
      value: "student",
      label: "Student",
      icon: "🎓",
    },
    {
      value: "mentor",
      label: "Mentor",
      icon: "♙",
    },
  ],

  fields: [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
      required: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Create a strong password",
      required: true,
    },
  ],

  submitLabel: "Create Account",

  showTerms: true,

  showSocialLogin: true,

  socialProviders: ["google", "facebook"],

  switchText: "Already have an account?",
  switchLabel: "Log in",

  brand: {
    title: "Join Porate Chai",
    description: "Start your learning journey today",

    image: "assets/welcomeSplash.png",

    features: [
      {
        title: "Find the right mentor",
        description: "From 1000+ verified teachers",
        icon: "userCheck",
      },
      {
        title: "Flexible learning",
        description: "Live classes at your convenience",
        icon: "calendar",
      },
      {
        title: "Achieve your goals",
        description: "Build a brighter future",
        icon: "target",
      },
    ],
  },
};