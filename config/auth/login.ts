// config/auth/login.ts

import { AuthConfig } from "@/types/auth/auth.types";

export const loginConfig: AuthConfig = {
  mode: "login",

  title: "Welcome Back 👋",
  subtitle: "Log in to your Porate Chai account",

  fields: [
    {
      name: "email",
      label: "Email or Phone Number",
      type: "email",
      placeholder: "Enter your email or phone number",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
    },
  ],

  submitLabel: "Log In",

  showRememberMe: true,
  showForgotPassword: true,
  showSocialLogin: true,

  socialProviders: ["google", "facebook"],

  switchText: "Don't have an account?",
  switchLabel: "Sign up",

  brand: {
    title: "Better Teachers.",
    highlightedTitle: "Brighter Future.",

    description:
      "তোমার শেখার যাত্রায়, বিশ্বস্ত শিক্ষক এখন হাতের কাছে।",

    image: "assets/Hero-splash.jpeg",

    features: [
      {
        title: "Secure Payments",
        description: "Your money is safe with us",
        icon: "shield",
      },
      {
        title: "Verified Mentors",
        description: "Only qualified & trusted teachers",
        icon: "userCheck",
      },
      {
        title: "24/7 Support",
        description: "We're here whenever you need us",
        icon: "clock",
      },
    ],
  },
};