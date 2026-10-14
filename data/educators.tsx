import { Educator } from '@/types/types';

export const initialEducators: Educator[] = [
  {
    id: 'ahsan-rahman',
    name: 'Ahsan Rahman',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    verified: true,
    verificationStatus: 'approved',
    documents: {
      idType: 'National Smart NID',
      idNumber: 'NID-8829-4401-2291',
      certificateName: 'BSc in EEE — BUET (Convocation 2020)',
      backgroundChecked: true,
      submittedAt: 'Aug 10, 2026'
    },
    rating: 4.9,
    reviewCount: 86,
    location: 'Dhaka (Dhanmondi / Online)',
    experience: 7,
    subjects: ['Physics', 'Mathematics', 'Calculus', 'Mechanics', 'HSC Preparation', 'Admission Preparation'],
    qualifications: [
      { degree: 'BSc in Electrical & Electronic Engineering', institute: 'BUET', passingYear: '2020' },
    ],
    priceMin: 600,
    availableThisWeek: true,
    description: 'Specializes in HSC physics and mathematics with a concept-first teaching approach. Over 700 students guided to public universities.',
    bio: 'I believe rote memorization is the enemy of true physics mastery. Over 7 years of full-time teaching, I have designed structured intuitive frameworks for Newtonian mechanics, electrodynamics, and differential calculus that break down even the most daunting admission problems into manageable visual first-principles.',
    teachingPhilosophy: 'Concepts before equations. I use interactive simulations, physical models, and structured derivation pathways so students understand the "why" before tackling the "how".',
    whoITeach: 'High school students (HSC 1st & 2nd year), Engineering aspirants (BUET / CKET), and college students wanting rock-solid foundations.',
    workHistory: [
      {
        period: '2021 — Present',
        role: 'Lead Educator & Academic Consultant',
        institution: 'Pirate Chai & Independent Practice',
        description: 'Educating 150+ students annually across 1-on-1 personalized tracks and intensive batch workshops.'
      },
      {
        period: '2019 — 2021',
        role: 'Senior Physics Instructor',
        institution: 'Udvash Engineering Care',
        description: 'Taught core mechanics and electricity batches; authored problem sets and concept notes.'
      },
      {
        period: '2016 — 2019',
        role: 'Peer Educator & Laboratory Assistant',
        institution: 'EEE Dept, BUET',
        description: 'Conducted problem-solving recitations for undergraduate engineering physics and calculus.'
      }
    ],
    schedule: [
      { day: 'Monday', status: 'Available', timeSlots: ['4:00 PM', '6:00 PM', '8:00 PM'] },
      { day: 'Tuesday', status: 'Available', timeSlots: ['5:00 PM', '7:30 PM'] },
      { day: 'Wednesday', status: 'Available', timeSlots: ['4:00 PM', '8:00 PM'] },
      { day: 'Thursday', status: 'Limited', timeSlots: ['6:30 PM'] },
      { day: 'Friday', status: 'Available', timeSlots: ['10:00 AM', '3:00 PM', '7:00 PM'] },
      { day: 'Saturday', status: 'Available', timeSlots: ['9:00 AM', '4:00 PM', '8:00 PM'] },
      { day: 'Sunday', status: 'Unavailable', timeSlots: [] }
    ],
    reviews: [
      {
        id: 'r1',
        studentName: 'Nafisa Ahmed',
        rating: 5.0,
        date: '3 days ago',
        subject: 'HSC Physics Mechanics',
        text: 'Ahsan bhai explains difficult concepts in a way that finally makes them feel simple. His rotational mechanics notes alone saved my midterm exam!'
      },
      {
        id: 'r2',
        studentName: 'Rafi Al-Hasan',
        rating: 5.0,
        date: '2 weeks ago',
        subject: 'Calculus & Vectors',
        text: 'Best educator I had in 2 years. Very patient, never rushes through questions, and always provides real-life analogies before diving into formulas.'
      },
      {
        id: 'r3',
        studentName: 'Tasnim Jahan',
        rating: 4.8,
        date: '1 month ago',
        subject: 'Admission Physics',
        text: 'Structured problem sets and clear homework feedback. He helped me spot my recurring calculation mistakes in thermodynamics.'
      }
    ]
  },
  {
    id: 'nafisa-kamal',
    name: 'Dr. Nafisa Kamal',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    verified: true,
    rating: 4.95,
    reviewCount: 112,
    location: 'Dhaka (Gulshan / Online)',
    experience: 8,
    subjects: ['Biology', 'Chemistry', 'Medical Admission', 'Organic Chemistry', 'HSC Preparation'],
    qualifications: [
      { degree: 'MBBS', institute: 'Dhaka Medical College', passingYear: '' },
      { degree: 'Gold Medalist in Biochemistry & Physiology', institute: 'Dhaka Medical College', passingYear: '' },
    ],
    priceMin: 800,
    availableThisWeek: true,
    description: 'DMC graduate specializing in Medical Admission Biology and Chemistry. Focuses on memory retention systems and diagram mastery.',
    bio: 'Cracking medical admission tests requires both conceptual clarity and high-speed recall. Having gone through DMC myself with top marks, I teach students active recall systems, mnemonics that actually stick, and how to conquer botanical taxonomy and human physiology effortlessly.',
    teachingPhilosophy: 'Visual memory triggers combined with rigorous question-bank drills. Every class ends with a 10-minute speed quiz to reinforce retainability.',
    whoITeach: 'Aspiring medical college candidates, HSC students aiming for A+ in Biology/Chemistry.',
    workHistory: [
      {
        period: '2020 — Present',
        role: 'Faculty Educator in Medical Sciences',
        institution: 'Pirate Chai & DMC Clinical Educators',
        description: 'Guided 340+ students into government medical colleges across Bangladesh.'
      },
      {
        period: '2018 — 2020',
        role: 'Lead Biology Specialist',
        institution: 'Unmesh Medical Care',
        description: 'Curated the nationwide mock question banks for human physiology and genetics.'
      }
    ],
    schedule: [
      { day: 'Monday', status: 'Available', timeSlots: ['7:00 PM', '9:00 PM'] },
      { day: 'Tuesday', status: 'Available', timeSlots: ['6:00 PM', '8:00 PM'] },
      { day: 'Wednesday', status: 'Limited', timeSlots: ['8:30 PM'] },
      { day: 'Thursday', status: 'Available', timeSlots: ['7:00 PM'] },
      { day: 'Friday', status: 'Available', timeSlots: ['9:30 AM', '3:00 PM', '6:00 PM'] },
      { day: 'Saturday', status: 'Available', timeSlots: ['11:00 AM', '5:00 PM'] },
      { day: 'Sunday', status: 'Available', timeSlots: ['7:00 PM'] }
    ],
    reviews: [
      {
        id: 'r4',
        studentName: 'Sumaiya Karim',
        rating: 5.0,
        date: '5 days ago',
        subject: 'Medical Biology',
        text: 'Nafisa Apu made human physiology my favorite subject! Her visual flowcharts are pure gold.'
      }
    ]
  },
  {
    id: 'tanvir-hossain',
    name: 'Tanvir Hossain',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    verified: true,
    rating: 4.88,
    reviewCount: 94,
    location: 'Dhaka (Uttara / Online)',
    experience: 6,
    subjects: ['English', 'IELTS', 'Writing', 'Speaking', 'University Admission'],
    qualifications: [
      { degree: 'MA in Applied Linguistics', institute: 'University of Dhaka', passingYear: '' },
      { degree: 'IELTS Overall Band 8.5 (L9, R9, W8, S8.5)', institute: 'IELTS', passingYear: '' },
      { degree: 'CELTA Certified', institute: 'Cambridge English', passingYear: '' },
    ],
    priceMin: 700,
    availableThisWeek: true,
    description: 'Certified IELTS instructor specializing in Academic Writing Task 2 and Fluency & Pronunciation for Band 7.5+ aspirants.',
    bio: 'Too many candidates get stuck at Band 6.5 because of template-based answers. In my sessions, we discard robotic formulas and build authentic, coherent academic arguments with natural lexical variety and cohesive phrasing.',
    teachingPhilosophy: 'Live personalized writing surgery and mock oral assessments with immediate criterion-by-criterion breakdown.',
    whoITeach: 'Graduates aiming for overseas scholarships, immigration applicants, and university students.',
    workHistory: [
      {
        period: '2019 — Present',
        role: 'Senior IELTS Trainer',
        institution: 'Pirate Chai Academic English Wing',
        description: 'Successfully coached 400+ test-takers to achieve their target band scores.'
      }
    ],
    schedule: [
      { day: 'Monday', status: 'Available', timeSlots: ['5:00 PM', '7:00 PM'] },
      { day: 'Tuesday', status: 'Available', timeSlots: ['6:00 PM', '8:30 PM'] },
      { day: 'Wednesday', status: 'Available', timeSlots: ['5:00 PM', '7:00 PM'] },
      { day: 'Thursday', status: 'Available', timeSlots: ['6:00 PM'] },
      { day: 'Friday', status: 'Available', timeSlots: ['10:00 AM', '4:00 PM', '8:00 PM'] },
      { day: 'Saturday', status: 'Limited', timeSlots: ['7:00 PM'] },
      { day: 'Sunday', status: 'Unavailable', timeSlots: [] }
    ],
    reviews: [
      {
        id: 'r5',
        studentName: 'Zubair Anwar',
        rating: 5.0,
        date: '1 week ago',
        subject: 'IELTS Writing Task 2',
        text: 'From 6.0 in writing to 7.5 in 6 weeks! His essay review feedback is remarkably precise.'
      }
    ]
  },
  {
    id: 'sadia-karim',
    name: 'Sadia Karim',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    verified: true,
    rating: 4.92,
    reviewCount: 78,
    location: 'Dhaka (Mirpur / Online)',
    experience: 5,
    subjects: ['Mathematics', 'HSC Preparation', 'SSC', 'Calculus', 'Trigonometry'],
    qualifications: [
      { degree: 'BSc in Mathematics', institute: 'University of Dhaka', passingYear: '' },
      { degree: 'MSc in Mathematics', institute: 'University of Dhaka', passingYear: '' },
    ],
    priceMin: 500,
    availableThisWeek: true,
    description: 'Renowned for demystifying Calculus, Coordinate Geometry, and Trigonometry for SSC & HSC board toppers.',
    bio: 'Mathematics is an art of seeing patterns. I specialize in taking students who are genuinely frightened of calculus and algebra, and giving them the structural intuition that turns math into their highest-scoring paper.',
    teachingPhilosophy: 'Step-by-step logic without shortcuts until the baseline intuition is crystalline.',
    whoITeach: 'SSC, HSC, and first-year university mathematics students.',
    workHistory: [
      {
        period: '2020 — Present',
        role: 'Math Specialist & Educator',
        institution: 'Pirate Chai',
        description: 'Taught over 500 board examinees with a 98% A+ rate.'
      }
    ],
    schedule: [
      { day: 'Monday', status: 'Available', timeSlots: ['4:00 PM', '6:00 PM'] },
      { day: 'Tuesday', status: 'Available', timeSlots: ['5:00 PM', '7:00 PM'] },
      { day: 'Wednesday', status: 'Available', timeSlots: ['4:00 PM', '6:00 PM'] },
      { day: 'Thursday', status: 'Available', timeSlots: ['5:00 PM', '8:00 PM'] },
      { day: 'Friday', status: 'Available', timeSlots: ['9:00 AM', '3:00 PM'] },
      { day: 'Saturday', status: 'Available', timeSlots: ['10:00 AM', '5:00 PM'] },
      { day: 'Sunday', status: 'Limited', timeSlots: ['6:00 PM'] }
    ],
    reviews: [
      {
        id: 'r6',
        studentName: 'Anika Tabassum',
        rating: 5.0,
        date: '2 weeks ago',
        subject: 'HSC Higher Math',
        text: 'Sadia Apu made Integration feel so intuitive! Her notes are the best resource for board exams.'
      }
    ]
  },
  {
    id: 'farhan-kabir',
    name: 'Farhan Kabir',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    verified: true,
    rating: 4.96,
    reviewCount: 65,
    location: 'Dhaka (Banani / Online)',
    experience: 9,
    subjects: ['Programming', 'ICT', 'Python', 'Web Development', 'Computer Science', 'Data Structures'],
    qualifications: [
      { degree: 'BSc in Computer Science and Engineering', institute: 'BUET', passingYear: '' },
      { degree: 'ICPC Regional Finalist', institute: 'International Collegiate Programming Contest', passingYear: '' },
    ],
    priceMin: 800,
    availableThisWeek: true,
    description: 'Industry engineer teaching clean code, practical Python, modern Web Development, and HSC ICT with interactive labs.',
    bio: 'Computer science should be taught through code you can actually run and build with. Whether you need an A+ in HSC ICT or want to build production full-stack web applications and land tech internships, I teach real-world programming fundamentals.',
    teachingPhilosophy: 'No theoretical lecturing without building something that compiles. Pair programming and clean architecture from day one.',
    whoITeach: 'HSC ICT students, college coders, career switchers, and university freshmen in CSE.',
    workHistory: [
      {
        period: '2022 — Present',
        role: 'Tech Lead & Educator',
        institution: 'Pirate Chai Tech Academy',
        description: 'Educating aspiring software developers and university freshmen.'
      },
      {
        period: '2017 — 2022',
        role: 'Senior Software Engineer',
        institution: 'Global Tech Corp',
        description: 'Architecting distributed systems and training junior engineers.'
      }
    ],
    schedule: [
      { day: 'Monday', status: 'Available', timeSlots: ['8:00 PM', '10:00 PM'] },
      { day: 'Tuesday', status: 'Available', timeSlots: ['8:00 PM', '10:00 PM'] },
      { day: 'Wednesday', status: 'Available', timeSlots: ['8:00 PM'] },
      { day: 'Thursday', status: 'Available', timeSlots: ['9:00 PM'] },
      { day: 'Friday', status: 'Available', timeSlots: ['4:00 PM', '8:00 PM'] },
      { day: 'Saturday', status: 'Available', timeSlots: ['11:00 AM', '7:00 PM'] },
      { day: 'Sunday', status: 'Limited', timeSlots: ['8:00 PM'] }
    ],
    reviews: [
      {
        id: 'r7',
        studentName: 'Mushfiqur Rahman',
        rating: 5.0,
        date: '3 weeks ago',
        subject: 'Python & Web Basics',
        text: 'Farhan bhai helped me build my first full-stack application from scratch in just 4 weeks. Unbelievable clarity!'
      }
    ]
  },
  {
    id: 'mehedi-hasan',
    name: 'Mehedi Hasan',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
    verified: true,
    rating: 4.85,
    reviewCount: 52,
    location: 'Dhaka (Online)',
    experience: 5,
    subjects: ['Economics', 'Accounting', 'Mathematics', 'University Admission', 'SAT'],
    qualifications: [
      { degree: 'BBA', institute: 'Institute of Business Administration, University of Dhaka', passingYear: '' },
      { degree: 'Chartered Accountancy Finalist', institute: '', passingYear: '' },
    ],
    priceMin: 700,
    availableThisWeek: false,
    description: 'IBA graduate with deep expertise in BBA/MBA admission test preparation, business analytics, and microeconomics.',
    bio: 'Cracking IBA requires lightning-fast mental math and analytical rigor. My program trains students in speed techniques, data sufficiency, and critical reasoning that give an unmatched competitive edge.',
    teachingPhilosophy: 'Targeted timing drills and cognitive shortcuts for high-stakes business school tests.',
    whoITeach: 'IBA aspirants, BBA students, and students preparing for SAT Quant & Verbal.',
    workHistory: [
      {
        period: '2021 — Present',
        role: 'Admission Strategist',
        institution: 'Pirate Chai Business Wing',
        description: 'Guided 80+ candidates who secured seats at IBA (DU, JU, and BUP).'
      }
    ],
    schedule: [
      { day: 'Monday', status: 'Limited', timeSlots: ['7:00 PM'] },
      { day: 'Tuesday', status: 'Limited', timeSlots: ['7:00 PM'] },
      { day: 'Wednesday', status: 'Available', timeSlots: ['6:00 PM', '8:30 PM'] },
      { day: 'Thursday', status: 'Available', timeSlots: ['7:00 PM'] },
      { day: 'Friday', status: 'Available', timeSlots: ['10:00 AM', '5:00 PM'] },
      { day: 'Saturday', status: 'Available', timeSlots: ['2:00 PM', '8:00 PM'] },
      { day: 'Sunday', status: 'Unavailable', timeSlots: [] }
    ],
    reviews: [
      {
        id: 'r8',
        studentName: 'Tahsin Chowdhury',
        rating: 5.0,
        date: '1 month ago',
        subject: 'IBA Admission Math',
        text: 'His quantitative shortcuts cut my test-solving time in half. Highly recommended!'
      }
    ]
  },
  {
    id: 'tasnim-rahman',
    name: 'Tasnim Rahman',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    verified: true,
    rating: 4.91,
    reviewCount: 69,
    location: 'Dhaka (Mohammadpur / Online)',
    experience: 6,
    subjects: ['Chemistry', 'HSC Preparation', 'Organic Chemistry', 'SSC', 'Admission Preparation'],
    qualifications: [
      { degree: 'BSc in Applied Chemistry', institute: 'University of Dhaka', passingYear: '' },
      { degree: 'MS in Applied Chemistry', institute: 'University of Dhaka', passingYear: '' },
    ],
    priceMin: 550,
    availableThisWeek: true,
    description: 'Simplifies organic reaction mechanisms and periodic properties using modular flashcards and problem-solving flowcharts.',
    bio: 'Many students treat organic chemistry like a phonebook to memorize. Once you understand electron density, leaving groups, and nucleophilic attack pathways, organic chemistry becomes as logical as geometry.',
    teachingPhilosophy: 'Electron-pushing arrow formalism and mechanism-driven problem solving.',
    whoITeach: 'HSC examinees, university admission test candidates, and O/A Level Chemistry students.',
    workHistory: [
      {
        period: '2020 — Present',
        role: 'Lead Chemistry Educator',
        institution: 'Pirate Chai',
        description: 'Author of the widely acclaimed "Mechanism Master" visual study guide.'
      }
    ],
    schedule: [
      { day: 'Monday', status: 'Available', timeSlots: ['5:00 PM', '7:00 PM'] },
      { day: 'Tuesday', status: 'Available', timeSlots: ['5:00 PM', '7:30 PM'] },
      { day: 'Wednesday', status: 'Available', timeSlots: ['6:00 PM'] },
      { day: 'Thursday', status: 'Available', timeSlots: ['4:00 PM', '7:00 PM'] },
      { day: 'Friday', status: 'Available', timeSlots: ['11:00 AM', '4:00 PM'] },
      { day: 'Saturday', status: 'Available', timeSlots: ['10:00 AM', '6:00 PM'] },
      { day: 'Sunday', status: 'Unavailable', timeSlots: [] }
    ],
    reviews: [
      {
        id: 'r9',
        studentName: 'Rayan Chowdhury',
        rating: 5.0,
        date: '2 weeks ago',
        subject: 'Organic Chemistry',
        text: 'Organic was my weakest subject until I started 1-on-1 sessions with Tasnim Apu. Mechanisms make sense now!'
      }
    ]
  },
  {
    id: 'arif-mahmud',
    name: 'Arif Mahmud',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    verified: true,
    rating: 4.97,
    reviewCount: 104,
    location: 'Dhaka (Online)',
    experience: 10,
    subjects: ['SAT', 'Mathematics', 'Economics', 'University Admission'],
    qualifications: [
      { degree: 'MSc in Financial Mathematics', institute: 'London School of Economics', passingYear: '' },
      { degree: 'SAT Math 800/800', institute: 'College Board', passingYear: '' },
    ],
    priceMin: 1200,
    availableThisWeek: true,
    description: 'Top-tier SAT Quant & Advanced Mathematics coach for students targeting Ivy League and US Top 50 universities.',
    bio: 'Achieving a perfect 800 on Digital SAT Math requires zero careless errors and the ability to immediately recognize Desmos-assisted speed opportunities. I coach serious college-bound students on speed, trap avoidance, and advanced functions.',
    teachingPhilosophy: 'Pristine error-log analysis. We catalog every single miss into knowledge gap vs trap vs calculation error.',
    whoITeach: 'High school students taking Digital SAT, ACT, and undergraduate math.',
    workHistory: [
      {
        period: '2016 — Present',
        role: 'Global Test Prep Consultant',
        institution: 'Pirate Chai Global Scholars',
        description: 'Helped 120+ students achieve 1500+ on the SAT with over $12M in combined scholarship offers.'
      }
    ],
    schedule: [
      { day: 'Monday', status: 'Available', timeSlots: ['7:00 PM', '9:00 PM'] },
      { day: 'Tuesday', status: 'Available', timeSlots: ['8:00 PM'] },
      { day: 'Wednesday', status: 'Available', timeSlots: ['7:00 PM', '9:00 PM'] },
      { day: 'Thursday', status: 'Limited', timeSlots: ['8:30 PM'] },
      { day: 'Friday', status: 'Available', timeSlots: ['3:00 PM', '7:00 PM'] },
      { day: 'Saturday', status: 'Available', timeSlots: ['10:00 AM', '4:00 PM', '8:00 PM'] },
      { day: 'Sunday', status: 'Available', timeSlots: ['6:00 PM'] }
    ],
    reviews: [
      {
        id: 'r10',
        studentName: 'Shahrin Ahmed',
        rating: 5.0,
        date: '1 week ago',
        subject: 'Digital SAT Math',
        text: 'Arif Sir took my score from 690 to 790 in two months! His Desmos tricks are unbelievable.'
      }
    ]
  },
  {
    id: 'nabila-islam',
    name: 'Nabila Islam',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    verified: true,
    rating: 4.87,
    reviewCount: 45,
    location: 'Chittagong / Online',
    experience: 4,
    subjects: ['Biology', 'SSC', 'HSC Preparation'],
    qualifications: [
      { degree: 'BSc in Biotechnology and Genetic Engineering', institute: 'SUST', passingYear: '' },
      { degree: 'Gold Medalist', institute: 'SUST', passingYear: '' },
    ],
    priceMin: 500,
    availableThisWeek: true,
    description: 'Passionate about Genetics, Molecular Biology, and Botany. Uses 3D cell models and concise exam revision notes.',
    bio: 'Biology is the code of life. I help young scholars grasp difficult botanical classifications and animal diversity with vivid visual aids and easy diagram sketching techniques needed for board exams.',
    teachingPhilosophy: 'Active drawing and diagram mastery. If you can sketch it accurately in 60 seconds, you own the concept.',
    whoITeach: 'SSC and HSC science group students.',
    workHistory: [
      {
        period: '2022 — Present',
        role: 'Biology Instructor',
        institution: 'Pirate Chai',
        description: 'Educating over 300 students annually across live interactive batch classes.'
      }
    ],
    schedule: [
      { day: 'Monday', status: 'Available', timeSlots: ['4:00 PM', '6:00 PM'] },
      { day: 'Tuesday', status: 'Available', timeSlots: ['5:00 PM'] },
      { day: 'Wednesday', status: 'Available', timeSlots: ['4:00 PM', '6:30 PM'] },
      { day: 'Thursday', status: 'Available', timeSlots: ['6:00 PM'] },
      { day: 'Friday', status: 'Available', timeSlots: ['9:00 AM', '3:00 PM'] },
      { day: 'Saturday', status: 'Available', timeSlots: ['11:00 AM', '5:00 PM'] },
      { day: 'Sunday', status: 'Unavailable', timeSlots: [] }
    ],
    reviews: [
      {
        id: 'r11',
        studentName: 'Fariha Noor',
        rating: 5.0,
        date: '3 weeks ago',
        subject: 'HSC Genetics',
        text: 'Her Mendel law and DNA replication diagrams were identical to what came in our board exam!'
      }
    ]
  },
  {
    id: 'samiul-hasan',
    name: 'Samiul Hasan',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    verified: true,
    rating: 4.82,
    reviewCount: 39,
    location: 'Dhaka (Online)',
    experience: 5,
    subjects: ['Accounting', 'Economics', 'HSC Preparation', 'SSC'],
    qualifications: [
      { degree: 'BBA in Accounting and Information Systems', institute: 'University of Dhaka', passingYear: '' },
      { degree: 'MBA in Accounting and Information Systems', institute: 'University of Dhaka', passingYear: '' },
      { degree: 'ACCA Affiliate', institute: 'ACCA', passingYear: '' },
    ],
    priceMin: 500,
    availableThisWeek: true,
    description: 'Accounting made systematic through double-entry flowcharts, cash flow mastery, and financial statement analysis.',
    bio: 'Accounting is not about blindly cramming rules; it is the universal language of commerce. I break down balance sheets, depreciation equations, and cost accounting so students get full 100/100 marks on board papers.',
    teachingPhilosophy: 'Ledger debit-credit intuition first, followed by speed solving past papers under timed conditions.',
    whoITeach: 'Commerce stream students of SSC, HSC, and first-year BBA.',
    workHistory: [
      {
        period: '2021 — Present',
        role: 'Commerce Lead Educator',
        institution: 'Pirate Chai',
        description: 'Taught over 350 commerce students with exemplary board results.'
      }
    ],
    schedule: [
      { day: 'Monday', status: 'Available', timeSlots: ['5:00 PM', '7:00 PM'] },
      { day: 'Tuesday', status: 'Available', timeSlots: ['6:00 PM', '8:00 PM'] },
      { day: 'Wednesday', status: 'Available', timeSlots: ['5:00 PM', '7:00 PM'] },
      { day: 'Thursday', status: 'Available', timeSlots: ['6:00 PM'] },
      { day: 'Friday', status: 'Available', timeSlots: ['10:00 AM', '4:00 PM'] },
      { day: 'Saturday', status: 'Available', timeSlots: ['9:00 AM', '3:00 PM'] },
      { day: 'Sunday', status: 'Limited', timeSlots: ['7:00 PM'] }
    ],
    reviews: [
      {
        id: 'r12',
        studentName: 'Ahnaf Tanvir',
        rating: 5.0,
        date: '1 month ago',
        subject: 'HSC Accounting',
        text: 'Financial statements used to be terrifying. Samiul Sir explained the ledger adjustments so clearly!'
      }
    ]
  },
  {
    id: 'rafi-ahmed',
    name: 'Rafi Ahmed',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    verified: false,
    rating: 4.79,
    reviewCount: 31,
    location: 'Dhaka (Baridhara / Online)',
    experience: 4,
    subjects: ['Physics', 'Mathematics', 'HSC Preparation'],
    qualifications: [
      { degree: 'BSc in Mechanical Engineering', institute: 'IUT', passingYear: '' },
      { degree: 'Edexcel A* in Physics and Further Mathematics', institute: 'Pearson Edexcel', passingYear: '' },
    ],
    priceMin: 700,
    availableThisWeek: true,
    description: 'Specializes in Cambridge & Edexcel O/A Level Physics and HSC mechanics with past paper surgery.',
    bio: 'Physics is intuitive when demonstrated through mechanical models. I provide rigorous past-paper topical drills with exact mark scheme guidelines so no marks are lost on vague wording.',
    teachingPhilosophy: 'Targeting mark-scheme phrasing and experimental physics questions.',
    whoITeach: 'O Level, A Level, and English Medium HSC students.',
    workHistory: [
      {
        period: '2022 — Present',
        role: 'Physics Tutor',
        institution: 'Pirate Chai',
        description: 'Educating 60+ English medium and HSC students.'
      }
    ],
    schedule: [
      { day: 'Monday', status: 'Available', timeSlots: ['4:00 PM', '6:00 PM'] },
      { day: 'Tuesday', status: 'Available', timeSlots: ['5:00 PM', '7:00 PM'] },
      { day: 'Wednesday', status: 'Limited', timeSlots: ['6:00 PM'] },
      { day: 'Thursday', status: 'Available', timeSlots: ['5:00 PM'] },
      { day: 'Friday', status: 'Available', timeSlots: ['2:00 PM', '6:00 PM'] },
      { day: 'Saturday', status: 'Available', timeSlots: ['10:00 AM', '4:00 PM'] },
      { day: 'Sunday', status: 'Unavailable', timeSlots: [] }
    ],
    reviews: [
      {
        id: 'r13',
        studentName: 'Zafir Khan',
        rating: 4.8,
        date: '2 weeks ago',
        subject: 'A Level Mechanics',
        text: 'Very thorough explanations on circular motion and gravitation.'
      }
    ]
  },
  {
    id: 'nusrat-jahan',
    name: 'Nusrat Jahan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    verified: true,
    rating: 4.93,
    reviewCount: 57,
    location: 'Dhaka (Online)',
    experience: 7,
    subjects: ['English', 'Writing', 'HSC Preparation', 'SSC', 'University Admission'],
    qualifications: [
      { degree: 'BA in English Literature', institute: 'University of Dhaka', passingYear: '' },
      { degree: 'MA in English Literature', institute: 'University of Dhaka', passingYear: '' },
    ],
    priceMin: 600,
    availableThisWeek: true,
    description: 'Transforming HSC English 1st & 2nd paper prep into engaging literature discussions and flawless grammatical writing.',
    bio: 'Most students struggle with HSC English modifiers, preposition collocations, and essay composition because grammar is taught as detached rules. I teach grammar through active sentence rewriting, rhythm, and clarity.',
    teachingPhilosophy: 'Sentence architecture and rhetorical clarity. Every lesson features live composition critique.',
    whoITeach: 'School and college examinees preparing for board exams and DU "D" / "B" Unit admission tests.',
    workHistory: [
      {
        period: '2019 — Present',
        role: 'English Academic Director',
        institution: 'Pirate Chai',
        description: 'Educated over 650 students with outstanding board distinctions.'
      }
    ],
    schedule: [
      { day: 'Monday', status: 'Available', timeSlots: ['4:00 PM', '6:00 PM'] },
      { day: 'Tuesday', status: 'Available', timeSlots: ['5:00 PM', '7:00 PM'] },
      { day: 'Wednesday', status: 'Available', timeSlots: ['4:00 PM', '6:00 PM'] },
      { day: 'Thursday', status: 'Available', timeSlots: ['5:00 PM'] },
      { day: 'Friday', status: 'Available', timeSlots: ['10:00 AM', '3:00 PM'] },
      { day: 'Saturday', status: 'Available', timeSlots: ['11:00 AM', '5:00 PM'] },
      { day: 'Sunday', status: 'Unavailable', timeSlots: [] }
    ],
    reviews: [
      {
        id: 'r14',
        studentName: 'Lamia Farzana',
        rating: 5.0,
        date: '3 weeks ago',
        subject: 'HSC English 2nd Paper',
        text: 'Nusrat madam made modifiers and right forms of verbs foolproof. Scored 94 in my pre-tests!'
      }
    ]
  },
  {
    id: 'tanvir-hassan',
    name: 'Tanvir Hassan',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    verified: false,
    verificationStatus: 'pending',
    documents: {
      idType: 'National Smart NID',
      idNumber: 'NID-9921-1102-8820',
      certificateName: 'BUET Bachelor of Science in EEE Certificate & Academic Transcript',
      backgroundChecked: true,
      submittedAt: 'Yesterday · 2:30 PM'
    },
    rating: 5.0,
    reviewCount: 0,
    location: 'Palashi, Dhaka',
    experience: 3,
    subjects: ['Physics', 'Mathematics', 'HSC Preparation', 'Electrodynamics'],
    qualifications: [
      { degree: 'BSc in Electrical and Electronic Engineering', institute: 'BUET', passingYear: '2023' },
      { degree: 'Former Physics Olympiad National Finalist', institute: 'National Physics Olympiad', passingYear: '' },
    ],
    priceMin: 500,
    availableThisWeek: true,
    description: 'Recent BUET EEE graduate offering structured problem solving for HSC board exams and engineering admission candidates.',
    bio: 'Fresh perspective on university admission test patterns. I focus on vector-based calculus shortcuts, electromagnetic theory visualization, and building exam endurance.',
    teachingPhilosophy: 'Targeted drill practice with immediate error post-mortem analysis.',
    whoITeach: 'HSC 1st and 2nd year students and BUET aspirants.',
    workHistory: [
      {
        period: '2023 — Present',
        role: 'Independent Physics Coach',
        institution: 'Dhaka',
        description: 'Taught 40+ students in 1-on-1 personalized tracks.'
      }
    ],
    schedule: [
      { day: 'Monday', status: 'Available', timeSlots: ['4:00 PM', '6:00 PM'] },
      { day: 'Wednesday', status: 'Available', timeSlots: ['4:00 PM', '7:00 PM'] },
      { day: 'Friday', status: 'Available', timeSlots: ['10:00 AM', '3:00 PM'] }
    ],
    reviews: []
  },
  {
    id: 'sharmin-akter',
    name: 'Sharmin Akter',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    verified: false,
    verificationStatus: 'pending',
    documents: {
      idType: 'International Passport',
      idNumber: 'P-BD-9920194',
      certificateName: 'British Council Certified IELTS Instructor Accreditation & Band 8.5 TRF',
      backgroundChecked: true,
      submittedAt: '2 days ago'
    },
    rating: 4.8,
    reviewCount: 4,
    location: 'Banani, Dhaka',
    experience: 5,
    subjects: ['IELTS', 'English', 'Spoken English'],
    qualifications: [
      { degree: 'MA in Applied Linguistics', institute: 'University of Dhaka', passingYear: '' },
      { degree: 'British Council Certified IELTS Instructor', institute: 'British Council', passingYear: '' },
      { degree: 'IELTS Band 8.5', institute: 'British Council', passingYear: '' },
    ],
    priceMin: 700,
    availableThisWeek: true,
    description: 'Certified IELTS educator with specialized accent reduction and Task 2 writing band 7+ frameworks.',
    bio: 'Dedicated to helping test-takers break the 6.5 plateau in Speaking and Writing through lexical resource expansion and structured argument architecture.',
    teachingPhilosophy: 'Rapid feedback loops with simulated 1-on-1 British Council examiner conditions.',
    whoITeach: 'Higher education applicants, immigration candidates, and corporate professionals.',
    workHistory: [
      {
        period: '2021 — Present',
        role: 'Lead IELTS Trainer',
        institution: 'Global Study Path',
        description: 'Coached over 200 candidates to overall band 7.5+.'
      }
    ],
    schedule: [
      { day: 'Tuesday', status: 'Available', timeSlots: ['6:00 PM', '8:00 PM'] },
      { day: 'Thursday', status: 'Available', timeSlots: ['6:00 PM', '8:00 PM'] },
      { day: 'Saturday', status: 'Available', timeSlots: ['11:00 AM', '4:00 PM'] }
    ],
    reviews: []
  },
  {
    id: 'tutor-farhan',
    name: 'Farhan Tariq',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
    verified: false,
    verificationStatus: 'suspended',
    documents: {
      idType: 'National Smart NID',
      idNumber: 'NID-7711-2299-3388',
      certificateName: 'BSc in Mathematics (DU)',
      backgroundChecked: false,
      submittedAt: 'May 10, 2026',
      rejectionReason: 'Suspended due to report #rep-101 for off-platform payment solicitation.'
    },
    rating: 3.8,
    reviewCount: 12,
    location: 'Uttara, Dhaka',
    experience: 4,
    subjects: ['Mathematics', 'Calculus', 'Algebra'],
    qualifications: [
      { degree: 'BSc in Mathematics', institute: 'University of Dhaka', passingYear: '' },
    ],
    priceMin: 450,
    availableThisWeek: false,
    description: 'HSC Higher Mathematics formula tricks and coordinate geometry.',
    bio: 'Formula shortcuts and calculator techniques for fast MCQ solving.',
    teachingPhilosophy: 'Memorize patterns to gain test speed.',
    whoITeach: 'College students.',
    workHistory: [],
    schedule: [],
    reviews: []
  }
];
