# Porate Chai

> **An online learning platform connecting students, tutors, and mentors through live video-based learning from home.**

Porate Chai is an e-learning platform designed to make online education more accessible by connecting **students with tutors and mentors** for live, interactive learning sessions.

This repository contains the **frontend application** of Porate Chai.

---

## 🚀 Project Status

**Current Phase:** Frontend Development
**Status:** 🟡 In Progress

### Progress

* [ ] Project foundation
* [ ] Design system
* [ ] Public pages
* [ ] Authentication UI
* [ ] Student experience
* [ ] Tutor experience
* [ ] Mentor experience
* [ ] Live class experience
* [ ] Messaging
* [ ] Dashboards
* [ ] Responsive optimization
* [ ] Accessibility
* [ ] Frontend testing
* [ ] Production polish

---

# 🧱 Tech Stack

| Technology       | Purpose                                    |
| ---------------- | ------------------------------------------ |
| **Next.js**      | React framework / application architecture |
| **React**        | UI development                             |
| **Bun**          | Runtime & package manager                  |
| **Tailwind CSS** | Styling & design system                    |
| **TypeScript**   | Type safety                                |

### Planned / Future Integration

* Authentication
* Backend API
* PostgreSQL
* Live video / WebRTC
* Real-time messaging
* Payment integration
* Notifications

---

# 🎯 Core Product

Porate Chai connects three primary user types:

### 👨‍🎓 Student

Students can:

* Discover tutors and mentors
* Search and filter instructors
* View instructor profiles
* Explore subjects and courses
* Book learning sessions
* Join live video classes
* Chat with tutors/mentors
* Track upcoming and previous classes
* Manage their learning activity

### 👨‍🏫 Tutor

Tutors can:

* Create professional profiles
* Define subjects and expertise
* Set availability
* Offer learning sessions
* Manage bookings
* Conduct live classes
* Communicate with students
* Track their teaching activity

### 🧑‍💼 Mentor

Mentors provide higher-level guidance such as:

* Career guidance
* Academic guidance
* Skill development
* Personal mentorship
* One-to-one mentoring sessions

---

# 🗺️ Frontend Development Roadmap

## Checkpoint 01 — Project Foundation

**Goal:** Establish a clean and scalable frontend architecture.

* [ ] Initialize Next.js project
* [ ] Configure Bun
* [ ] Configure TypeScript
* [ ] Configure Tailwind CSS
* [ ] Establish folder structure
* [ ] Configure ESLint
* [ ] Configure formatting
* [ ] Setup environment variables
* [ ] Create base layout
* [ ] Create global styles
* [ ] Setup fonts
* [ ] Setup icons
* [ ] Create reusable UI component structure

**Checkpoint:**

> Application runs cleanly with a scalable project structure.

---

# Checkpoint 02 — Design System

**Goal:** Establish a consistent visual language before building large pages.

### Foundations

* [ ] Color tokens
* [ ] Typography scale
* [ ] Spacing system
* [ ] Border radius
* [ ] Shadows
* [ ] Container system
* [ ] Grid system
* [ ] Breakpoints
* [ ] Z-index system
* [ ] Motion / animation rules

### Components

* [ ] Button
* [ ] Input
* [ ] Select
* [ ] Checkbox
* [ ] Radio
* [ ] Switch
* [ ] Badge
* [ ] Avatar
* [ ] Card
* [ ] Modal
* [ ] Dropdown
* [ ] Tabs
* [ ] Toast
* [ ] Tooltip
* [ ] Pagination
* [ ] Skeleton
* [ ] Empty state
* [ ] Loading state
* [ ] Error state

**Checkpoint:**

> New pages can be built primarily from reusable design-system components.

---

# Checkpoint 03 — Public Website

**Goal:** Build the public-facing experience.

### Homepage

* [ ] Navigation
* [ ] Hero section
* [ ] Search
* [ ] How Porate Chai works
* [ ] Featured tutors
* [ ] Featured mentors
* [ ] Popular subjects
* [ ] Benefits
* [ ] Testimonials
* [ ] CTA
* [ ] Footer

### Other Public Pages

* [ ] About
* [ ] How it works
* [ ] Tutors
* [ ] Mentors
* [ ] Subjects
* [ ] Pricing
* [ ] Contact
* [ ] FAQ

**Checkpoint:**

> A visitor can understand Porate Chai and discover learning opportunities without logging in.

---

# Checkpoint 04 — Authentication

**Goal:** Build the complete authentication experience.

* [ ] Login
* [ ] Register
* [ ] Student registration
* [ ] Tutor registration
* [ ] Mentor registration
* [ ] Forgot password
* [ ] Reset password
* [ ] Email verification
* [ ] OAuth UI if required
* [ ] Authentication loading states
* [ ] Authentication error states

**Checkpoint:**

> Users can enter the platform through a clear role-based onboarding experience.

---

# Checkpoint 05 — Tutor & Mentor Discovery

**Goal:** Allow students to find the right instructor.

### Discovery

* [ ] Tutor listing
* [ ] Mentor listing
* [ ] Search
* [ ] Subject filter
* [ ] Location filter
* [ ] Price filter
* [ ] Rating filter
* [ ] Availability filter
* [ ] Experience filter
* [ ] Sorting
* [ ] Pagination / infinite scroll

### Profile

* [ ] Profile header
* [ ] Profile photo
* [ ] Bio
* [ ] Expertise
* [ ] Subjects
* [ ] Experience
* [ ] Ratings & reviews
* [ ] Pricing
* [ ] Availability
* [ ] Book session CTA

**Checkpoint:**

> A student can discover an instructor, evaluate their profile, and decide whether to book a session.

---

# Checkpoint 06 — Student Experience

**Goal:** Build the student-side learning workflow.

### Student Dashboard

* [ ] Dashboard overview
* [ ] Upcoming classes
* [ ] Previous classes
* [ ] Active bookings
* [ ] Recommended tutors
* [ ] Recommended mentors
* [ ] Notifications
* [ ] Learning activity

### Booking

* [ ] Select instructor
* [ ] Select session type
* [ ] Select date
* [ ] Select available time
* [ ] Booking confirmation
* [ ] Booking status
* [ ] Cancellation UI

### Learning

* [ ] Upcoming class
* [ ] Join class
* [ ] Class details
* [ ] Session history
* [ ] Reviews / feedback

**Checkpoint:**

> A student can go from discovery → booking → attending → reviewing a learning session.

---

# Checkpoint 07 — Tutor Experience

**Goal:** Build the tutor workflow.

### Tutor Dashboard

* [ ] Dashboard overview
* [ ] Upcoming sessions
* [ ] Today's classes
* [ ] Student list
* [ ] Earnings overview
* [ ] Reviews
* [ ] Notifications

### Tutor Profile

* [ ] Edit profile
* [ ] Bio
* [ ] Subjects
* [ ] Experience
* [ ] Pricing
* [ ] Profile image
* [ ] Availability

### Session Management

* [ ] Create availability
* [ ] Manage schedule
* [ ] Accept / manage bookings
* [ ] Session details
* [ ] Student information
* [ ] Session history

**Checkpoint:**

> A tutor can create their presence, manage availability, and conduct their teaching workflow.

---

# Checkpoint 08 — Mentor Experience

**Goal:** Support the mentor-specific workflow.

* [ ] Mentor dashboard
* [ ] Mentor profile
* [ ] Expertise
* [ ] Availability
* [ ] Session management
* [ ] Student management
* [ ] Upcoming sessions
* [ ] Previous sessions
* [ ] Reviews
* [ ] Earnings / activity

**Checkpoint:**

> Mentors have a complete workflow appropriate for one-to-one mentorship.

---

# Checkpoint 09 — Live Class Experience

**Goal:** Build the core live learning interface.

### Video Classroom

* [ ] Video area
* [ ] Participant list
* [ ] Microphone control
* [ ] Camera control
* [ ] Screen sharing
* [ ] Chat
* [ ] Leave class
* [ ] Connection status
* [ ] Reconnection state
* [ ] Participant mute indicators
* [ ] Fullscreen
* [ ] Responsive classroom layout

### Class States

* [ ] Waiting room
* [ ] Instructor not joined
* [ ] Class starting
* [ ] Class active
* [ ] Connection lost
* [ ] Class ended

**Checkpoint:**

> Student and instructor can enter a focused virtual classroom designed around live learning.

---

# Checkpoint 10 — Messaging

**Goal:** Enable communication between users.

* [ ] Conversation list
* [ ] Chat interface
* [ ] Send message
* [ ] Message timestamps
* [ ] Read status
* [ ] Online status
* [ ] Attachments
* [ ] Empty state
* [ ] Loading state
* [ ] Error state
* [ ] Mobile chat layout

**Checkpoint:**

> Students, tutors, and mentors can communicate before and around their sessions.

---

# Checkpoint 11 — Notifications

* [ ] Notification center
* [ ] New booking
* [ ] Booking confirmation
* [ ] Booking cancellation
* [ ] Upcoming class reminder
* [ ] New message
* [ ] Payment notification
* [ ] System notification
* [ ] Read / unread states

**Checkpoint:**

> Important platform events are visible and understandable to users.

---

# Checkpoint 12 — Admin Dashboard

**Goal:** Provide platform administration capabilities.

### Dashboard

* [ ] Overview
* [ ] Users
* [ ] Students
* [ ] Tutors
* [ ] Mentors
* [ ] Sessions
* [ ] Bookings
* [ ] Payments
* [ ] Reports
* [ ] Reviews
* [ ] Disputes
* [ ] Notifications

### Moderation

* [ ] User verification
* [ ] Profile moderation
* [ ] Report management
* [ ] Dispute management
* [ ] Account suspension
* [ ] Content moderation

**Checkpoint:**

> Administrators can monitor and manage the core platform operations.

---

# Checkpoint 13 — Responsive Design

Test every major screen at:

* [ ] Mobile
* [ ] Tablet
* [ ] Laptop
* [ ] Desktop
* [ ] Large desktop

### Priority

* [ ] Navigation
* [ ] Cards
* [ ] Forms
* [ ] Tables
* [ ] Dashboards
* [ ] Modals
* [ ] Chat
* [ ] Video classroom

**Checkpoint:**

> No important workflow breaks across supported screen sizes.

---

# Checkpoint 14 — Accessibility

* [ ] Semantic HTML
* [ ] Keyboard navigation
* [ ] Focus states
* [ ] Accessible forms
* [ ] Labels
* [ ] ARIA where necessary
* [ ] Color contrast
* [ ] Screen-reader-friendly navigation
* [ ] Reduced-motion support

**Checkpoint:**

> The platform is usable beyond mouse-and-keyboard users.

---

# Checkpoint 15 — Frontend Quality

### Performance

* [ ] Image optimization
* [ ] Lazy loading
* [ ] Code splitting
* [ ] Reduce unnecessary client components
* [ ] Loading states
* [ ] Skeleton states
* [ ] Optimize fonts
* [ ] Optimize bundle

### UX

* [ ] Empty states
* [ ] Error states
* [ ] Success states
* [ ] Confirmation dialogs
* [ ] Form validation
* [ ] Toast feedback
* [ ] Offline / connection states

**Checkpoint:**

> The application feels fast, predictable, and polished.

---

# Checkpoint 16 — Testing

* [ ] Component tests
* [ ] Form tests
* [ ] Authentication flow
* [ ] Search flow
* [ ] Booking flow
* [ ] Student flow
* [ ] Tutor flow
* [ ] Mentor flow
* [ ] Messaging flow
* [ ] Live class flow
* [ ] Responsive testing
* [ ] Cross-browser testing

**Checkpoint:**

> Critical user journeys work reliably.

---

# Checkpoint 17 — Production Readiness

* [ ] Production environment variables
* [ ] Error monitoring
* [ ] Analytics
* [ ] SEO metadata
* [ ] Open Graph metadata
* [ ] Favicon
* [ ] Sitemap
* [ ] Robots.txt
* [ ] 404 page
* [ ] Error page
* [ ] Loading pages
* [ ] Security review
* [ ] Performance audit
* [ ] Accessibility audit

**Checkpoint:**

> Frontend is ready to connect to production backend services and deploy.

---

# 🧭 Main User Journey

The primary student journey should work like this:

```text
Landing Page
     ↓
Discover Tutors / Mentors
     ↓
Search / Filter
     ↓
View Profile
     ↓
Choose Session
     ↓
Select Time
     ↓
Book
     ↓
Confirmation
     ↓
Upcoming Session
     ↓
Join Live Class
     ↓
Complete Session
     ↓
Review / Feedback
```

Tutor journey:

```text
Register
   ↓
Create Profile
   ↓
Set Subjects & Pricing
   ↓
Set Availability
   ↓
Receive Booking
   ↓
Prepare for Session
   ↓
Join Live Class
   ↓
Complete Session
   ↓
Review / Earnings
```

---

# 📁 Suggested Frontend Structure

```text
src/
├── app/
│   ├── (public)/
│   ├── (auth)/
│   ├── student/
│   ├── tutor/
│   ├── mentor/
│   ├── admin/
│   ├── classroom/
│   └── api/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── forms/
│   ├── cards/
│   └── shared/
│
├── features/
│   ├── auth/
│   ├── students/
│   ├── tutors/
│   ├── mentors/
│   ├── bookings/
│   ├── classroom/
│   ├── messaging/
│   ├── notifications/
│   └── payments/
│
├── lib/
├── hooks/
├── types/
├── utils/
├── constants/
└── styles/
```

---

# 📊 Overall Progress

Update this section as development progresses.

| Area                 | Status        |
| -------------------- | ------------- |
| Project Foundation   | ⬜ Not Started |
| Design System        | ⬜ Not Started |
| Public Website       | ⬜ Not Started |
| Authentication       | ⬜ Not Started |
| Tutor Discovery      | ⬜ Not Started |
| Student Experience   | ⬜ Not Started |
| Tutor Experience     | ⬜ Not Started |
| Mentor Experience    | ⬜ Not Started |
| Live Classroom       | ⬜ Not Started |
| Messaging            | ⬜ Not Started |
| Notifications        | ⬜ Not Started |
| Admin Dashboard      | ⬜ Not Started |
| Responsive Design    | ⬜ Not Started |
| Accessibility        | ⬜ Not Started |
| Testing              | ⬜ Not Started |
| Production Readiness | ⬜ Not Started |

### Status Legend

* ⬜ Not Started
* 🟡 In Progress
* 🟢 Completed
* 🔴 Blocked

---

# 📝 Development Notes

Use this section to record important decisions during development.

### Current Focus

> Add the current development goal here.

### Next Task

> Add the next concrete task here.

### Blockers

> Add blockers here.

### Decisions

> Record important architectural or UI decisions here.

---

# 🏁 Definition of Done

A feature is considered **Done** when:

* [ ] UI is implemented
* [ ] Responsive behavior is verified
* [ ] Loading state exists
* [ ] Empty state exists
* [ ] Error state exists
* [ ] Form validation works where applicable
* [ ] Accessibility basics are covered
* [ ] Components are reusable
* [ ] No console errors
* [ ] Tested on mobile and desktop
* [ ] Code is clean and maintainable

---

## 🌱 Vision

Porate Chai aims to make quality education more accessible by allowing people to **learn from the right person, from anywhere, through meaningful live interaction.**

> **Learn from anywhere. Teach from anywhere. Grow together.**
