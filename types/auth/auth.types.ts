// components/auth/auth.types.ts

import type { IconName } from "@/components/ui/Icon";

export type AuthFieldType =
  | "text"
  | "email"
  | "password"
  | "tel";

export interface AuthFieldConfig {
  name: string;
  label: string;
  type: AuthFieldType;
  placeholder?: string;
  required?: boolean;
}

export interface AuthFeature {
  title: string;
  description?: string;
  icon?: IconName;
}

export interface AuthConfig {
  mode: "login" | "register" | "recovery";

  title: string;
  subtitle?: string;

  roleOptions?: {
    value: string;
    label: string;
    icon?: string;
  }[];

  fields: AuthFieldConfig[];

  submitLabel: string;

  showRememberMe?: boolean;
  showForgotPassword?: boolean;
  showSocialLogin?: boolean;
  showTerms?: boolean;

  socialProviders?: ("google" | "facebook")[];

  switchText?: string;
  switchLabel?: string;

  brand?: {
    title: string;
    highlightedTitle?: string;
    description?: string;

    image?: string;

    features?: AuthFeature[];
  };
}