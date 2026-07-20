// All data below is illustrative demo data for the ATOM Season 9 pitch MVP.
// No real employee, insurer, or medical data is used anywhere in this app.

export const employee = {
  name: "Aditi Rao",
  dept: "Engineering",
  role: "Senior Analyst",
};

export const labSummary = {
  parsedOn: "12 Jul 2026",
  flags: [
    { label: "LDL Cholesterol", value: "142 mg/dL", status: "watch" },
    { label: "Vitamin D", value: "18 ng/mL", status: "low" },
    { label: "Resting Heart Rate", value: "78 bpm", status: "watch" },
    { label: "HbA1c", value: "5.4%", status: "good" },
  ],
  milestones: [
    {
      pillar: "Fitness",
      goal: "3 brisk 25-min walks this week to bring resting HR toward 70bpm",
      color: "coral",
    },
    {
      pillar: "Mental health",
      goal: "2 guided breathing sessions after your two longest meeting days",
      color: "green",
    },
    {
      pillar: "Diet",
      goal: "Add one vitamin-D source daily (eggs, fortified milk, 10-min sun break)",
      color: "gold",
    },
  ],
};

export const chatScript = [
  {
    keywords: ["fitness", "walk", "steps", "exercise"],
    reply:
      "Your fitness milestone is 3 brisk 25-minute walks this week. I built this from your resting heart rate (78bpm) trending above your 6-month baseline. Want me to schedule reminders around your calendar's free slots?",
  },
  {
    keywords: ["mental", "stress", "breath", "anxious", "burnout"],
    reply:
      "I noticed two back-to-back meeting-heavy days this week. I've queued two 4-minute guided breathing sessions after those blocks — small enough to not feel like homework. Your team's average stress-check score is down 6% this quarter, so you're not alone in this.",
  },
  {
    keywords: ["diet", "food", "eat", "vitamin", "nutrition"],
    reply:
      "Your Vitamin D came in low (18 ng/mL). I'm suggesting one small daily source — eggs, fortified milk, or a 10-minute midday sun break — rather than a supplement, since that's a decision for your doctor, not me.",
  },
  {
    keywords: ["how", "generated", "work", "built", "model"],
    reply:
      "I read the structured values from your annual lab PDF (never the raw file is shared onward), compared them against clinical reference ranges, and matched deltas to a milestone library reviewed by our medical panel. I flag, I don't diagnose — anything outside normal range gets a 'talk to a doctor' nudge, not an AI opinion.",
  },
  {
    keywords: ["safe", "privacy", "data", "share", "hr", "employer"],
    reply:
      "Your employer sees only anonymized, department-level trends — never your individual results. You can see and revoke exactly what's shared in the Trust & Privacy tab, anytime.",
  },
  {
    keywords: ["hallucinat", "wrong", "trust", "accurate", "sure"],
    reply:
      "Good question to ask. I only generate wording and pacing — every threshold I flag comes from your actual lab values against clinical reference ranges, not from a language model guessing. If I'm ever unsure, I say so and route you to a clinician instead of a confident-sounding guess.",
  },
  {
    keywords: ["leaderboard", "challenge", "department", "team"],
    reply:
      "Engineering is 2nd this week in the step challenge, 340 steps behind Sales. Want me to suggest a low-effort way to close that gap without turning it into a competition you feel pressured by?",
  },
  {
    keywords: ["twin", "trajectory", "future", "90", "30", "60"],
    reply:
      "Your digital twin projects your cardiovascular risk score easing from 'watch' to 'good' by day 70 if you keep ~70% of this week's plan. Check the Digital Twin tab to see the current-path vs with-PrimePulse comparison.",
  },
  {
    keywords: ["sleep", "tired", "rest"],
    reply:
      "Your check-ins show sleep dipping on Sun–Mon nights. I've nudged your Sunday evening reminder 30 minutes earlier this week — nothing drastic, just a small default shift.",
  },
];

export const chatFallback =
  "I can help with your fitness, mental health, or diet milestones, explain how I generated them, or talk through what data is shared. What would help most right now?";

export const suggestedPrompts = [
  "Show my fitness milestone",
  "How was this generated?",
  "Is my data safe?",
  "What about hallucinations?",
];

export const leaderboard = [
  { dept: "Sales", points: 2840, streak: 12, trend: "up" },
  { dept: "Engineering", points: 2500, streak: 9, trend: "up" },
  { dept: "Operations", points: 2210, streak: 4, trend: "flat" },
  { dept: "Customer Success", points: 1980, streak: 6, trend: "up" },
  { dept: "Finance", points: 1640, streak: 2, trend: "down" },
];

export const challenges = [
  {
    title: "10K Steps Sprint",
    detail: "Engineering vs Sales · 4 days left",
    progress: 68,
    color: "coral",
  },
  {
    title: "Mindful Mornings",
    detail: "Company-wide · 3-min check-ins",
    progress: 41,
    color: "green",
  },
  {
    title: "Hydration Streak",
    detail: "Customer Success · personal streaks",
    progress: 82,
    color: "gold",
  },
];

export const trajectoryData = [
  { day: "Day 0", current: 62, withPP: 62 },
  { day: "Day 15", current: 60, withPP: 58 },
  { day: "Day 30", current: 59, withPP: 51 },
  { day: "Day 45", current: 57, withPP: 45 },
  { day: "Day 60", current: 56, withPP: 39 },
  { day: "Day 75", current: 55, withPP: 34 },
  { day: "Day 90", current: 54, withPP: 30 },
];
// values represent a composite "cardiometabolic risk score" (lower is better)

export const generativeContent = [
  { title: "Evening wind-down", meta: "Voice meditation · 4 min", icon: "voice" },
  { title: "Coach Arjun — mobility flow", meta: "Avatar trainer · 8 min session", icon: "trainer" },
  { title: "You, in 90 days", meta: "Future-self visualization", icon: "future" },
];

export const hrKpis = [
  { label: "Monthly active engagement", value: "47%", sub: "vs 9% industry avg after rollout", color: "green" },
  { label: "Workforce burnout index", value: "31 / 100", sub: "down from 38 last quarter", color: "coral" },
  { label: "Projected premium impact", value: "−6.2%", sub: "at current participation rate", color: "gold" },
];

export const engagementTrend = [
  { month: "M1", engagement: 22 },
  { month: "M2", engagement: 29 },
  { month: "M3", engagement: 35 },
  { month: "M4", engagement: 41 },
  { month: "M5", engagement: 44 },
  { month: "M6", engagement: 47 },
];

export const riskDistribution = [
  { name: "Low risk", value: 58 },
  { name: "Watch", value: 31 },
  { name: "High risk", value: 11 },
];

export const deptBreakdown = [
  { dept: "Sales", engagement: "54%", burnout: "Moderate", trend: "Improving" },
  { dept: "Engineering", engagement: "49%", burnout: "Moderate", trend: "Improving" },
  { dept: "Operations", engagement: "41%", burnout: "Elevated", trend: "Flat" },
  { dept: "Customer Success", engagement: "46%", burnout: "Moderate", trend: "Improving" },
  { dept: "Finance", engagement: "33%", burnout: "Elevated", trend: "Declining" },
];

export const consentItems = [
  {
    key: "anonAnalytics",
    title: "Share anonymized trends with my employer",
    detail: "Department-level only. Your individual results are never visible to HR.",
    default: true,
  },
  {
    key: "aiCoaching",
    title: "Personalized AI wellness coaching",
    detail: "Uses your lab values and check-ins to generate milestones and chat replies.",
    default: true,
  },
  {
    key: "generativeContent",
    title: "Generative audio & avatar content",
    detail: "Voice meditations and avatar sessions personalized to your goals.",
    default: false,
  },
  {
    key: "insurerSharing",
    title: "Share aggregate data with insurance underwriters",
    detail: "Fully anonymized, cohort-level only — used to explore premium optimization.",
    default: false,
  },
];

export const dpdpPoints = [
  "Explicit, itemized consent for every data use — nothing bundled or pre-ticked without disclosure.",
  "Individual lab results are never shared with employers — only cohort-level, anonymized aggregates.",
  "Full right to access, correct, or withdraw consent for any data category, anytime.",
  "AI-generated wellness content is clearly labeled as AI-generated, never presented as clinical advice.",
];

export const safetyPoints = [
  "Every flagged value is grounded in your actual lab data against clinical reference ranges — the AI never invents a number.",
  "Out-of-range results route to a 'consult a doctor' prompt instead of an AI-generated medical opinion.",
  "Human medical review panel audits the milestone library quarterly.",
  "A visible AI-disclosure label appears on every generated message, chart, and piece of content.",
];
