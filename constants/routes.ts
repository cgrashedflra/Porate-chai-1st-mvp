const ROUTES = {
  HOME: "/",
  MENTORS: "/mentors",
    CLASSES: "/classes",
    ABOUT: "/about",
    FAQ: "/faq",
    HOW_IT_WORKS: "/how-it-works",
    HOW_IT_WORKS_SECTION: "/#how-it-works",
    TERMS: "/terms",
    PRIVACY: "/privacy",
    
  AUTH: {
    SIGN_IN: "/sign-in",
    SIGN_UP: "/signup",
  },

  
    
  

  STUDENT: {
    DASHBOARD: "/dashboard/student",
  },

  EDUCATOR: {
    DASHBOARD: "/dashboard/educator",
    PROFILE: "/dashboard/educator/profile",
    NEW_CLASS: "/dashboard/educator/classes/new",
  },

  ADMIN: {
    ROOT: "/admin",
  },

  CLASSROOM: {
    DEMO: "/classroom/session-live-demo",
  },

  MENTOR: (id: string) => `/mentors/${id}`,
  CLASS: (id: string) => `/classes/${id}`,
} as const;

export default ROUTES;