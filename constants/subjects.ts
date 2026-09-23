// ============================================================
// SUBJECT → BADGE VARIANT — subject-wise colors, location-agnostic.
// The SAME subject always renders the SAME variant no matter
// where it appears (hero, mentor card, popular subjects, ...).
// ============================================================

import type { BadgeVariant } from './badge';

const SUBJECT_VARIANTS: Record<string, BadgeVariant> = {
    // Math family
    mathematics: 'blue',
    math: 'blue',
    'higher math': 'blue',
    calculus: 'blue',
    algebra: 'blue',
    trigonometry: 'blue',
    mechanics: 'blue',
    'গণিত': 'blue',
    'উচ্চতর গণিত': 'blue',

    // Physics family
    physics: 'purple',
    electrodynamics: 'purple',
    'পদার্থবিজ্ঞান': 'purple',

    // Chemistry family
    chemistry: 'green',
    'organic chemistry': 'green',
    'রসায়ন': 'green',
    'জৈব রসায়ন': 'green',

    // Biology family
    biology: 'orange',
    'medical admission': 'orange',
    'জীববিজ্ঞান': 'orange',
    'মেডিকেল ভর্তি': 'orange',

    // Languages
    english: 'green',
    'spoken english': 'green',
    'ইংরেজি': 'green',
    bangla: 'blue',
    'বাংলা': 'blue',
    japanese: 'blue',
    'জাপানি ভাষা': 'blue',
    ielts: 'purple',

    // Computer / programming family
    ict: 'blue',
    programming: 'blue',
    'computer science': 'blue',
    'web development': 'blue',
    python: 'blue',
    javascript: 'blue',
    'data structures': 'blue',
    'কম্পিউটার প্রোগ্রামিং': 'blue',

    // Business / economics family
    economics: 'orange',
    accounting: 'orange',
    finance: 'orange',
    'business studies': 'green',
    'অর্থনীতি': 'orange',
    'হিসাববিজ্ঞান': 'orange',
    'ব্যবসায় শিক্ষা': 'green',

    // Humanities
    history: 'purple',
    'social science': 'purple',
    geography: 'blue',
    islam: 'blue',
    'fine arts': 'green',
    'আরও অনেক বিষয়': 'green',
    'ইতিহাস': 'purple',
    'সামাজিক বিজ্ঞান': 'purple',
    'ভূগোল': 'blue',
    'ইসলাম শিক্ষা': 'blue',
    'চারুকলা ও ডিজাইন': 'green',

    // Skill / prep buckets
    freelancing: 'purple',
    'ফ্রিল্যান্সিং ও স্কিল ডেভেলপমেন্ট': 'purple',
    'hsc preparation': 'purple',
    'admission preparation': 'purple',
    'university admission': 'purple',
    ssc: 'blue',
    sat: 'orange',
    writing: 'green',
    speaking: 'green',
};

const FALLBACK_VARIANTS: BadgeVariant[] = ['blue', 'purple', 'green', 'orange'];

const normalize = (subject: string) => subject.trim().toLowerCase();

/** Deterministic hash so unknown subjects still get a stable color across the app. */
const hashVariant = (key: string): BadgeVariant => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
    }
    return FALLBACK_VARIANTS[hash % FALLBACK_VARIANTS.length];
};

/** Returns a stable badge variant for a subject name, anywhere it is used. */
export const getSubjectVariant = (subject: string): BadgeVariant =>
    SUBJECT_VARIANTS[normalize(subject)] ?? hashVariant(normalize(subject));