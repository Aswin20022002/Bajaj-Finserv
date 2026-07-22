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
      goal: "3 brisk 25-minute walks this week to bring resting heart rate toward 70bpm",
      color: "brand",
    },
    {
      pillar: "Mental health",
      goal: "2 guided breathing sessions after your two longest meeting days",
      color: "positive",
    },
    {
      pillar: "Diet",
      goal: "Add one vitamin D source daily: eggs, fortified milk, or a 10-minute sun break",
      color: "watch",
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
      "I noticed two back-to-back meeting-heavy days this week, so I've queued two 4-minute guided breathing sessions right after those blocks. Your department's average stress-check score is down slightly this quarter, so you're not alone in this.",
  },
  {
    keywords: ["diet", "food", "eat", "vitamin", "nutrition"],
    reply:
      "Your Vitamin D came in low at 18 ng/mL. I'm suggesting one small daily source, like eggs, fortified milk, or a 10-minute midday sun break, rather than a supplement, since that dosage call belongs to your doctor, not me.",
  },
  {
    keywords: ["how", "generated", "work", "built", "model"],
    reply:
      "I read the structured values out of your annual lab PDF (the file itself is never shared onward), then checked them against clinical reference ranges and a vetted clinical content library. I flag patterns, I don't diagnose. Anything outside a normal range gets a note to talk to a doctor instead of an AI opinion.",
  },
  {
    keywords: ["safe", "privacy", "data", "share", "hr", "employer"],
    reply:
      "Your employer only ever sees anonymized, department-level trends, never your individual results. Wearable data has its own separate consent too, so turning one off never affects the other. You can review and revoke anything in the Trust & Privacy tab.",
  },
  {
    keywords: ["hallucinat", "wrong", "trust", "accurate", "sure"],
    reply:
      "Fair question. Every threshold I flag comes from your actual lab values checked against clinical reference ranges, not a language model guessing at a number. If a reading looks unusual, or something you say sounds urgent, I hand off to a clinician rather than take a guess.",
  },
  {
    keywords: ["leaderboard", "challenge", "department", "team"],
    reply:
      "Engineering is 2nd this week in the step challenge, 340 steps behind Sales. Want a low-effort way to close that gap without it feeling like added pressure?",
  },
  {
    keywords: ["wearable", "watch", "health connect", "healthkit", "device", "connect my"],
    reply:
      "You can link Google Health Connect or Apple HealthKit from the Continuous & Rewards tab, no extra hardware required. Already own a Noise or boAt watch? It connects the same way. If not, there's an earn-back option where your activity pays down a device's cost over time.",
  },
  {
    keywords: ["whatsapp", "sms", "no app", "no phone"],
    reply:
      "If a smartphone or wearable isn't practical, daily check-ins also work over WhatsApp. Same milestones, same privacy rules, just a different channel in.",
  },
  {
    keywords: ["sleep", "tired", "rest"],
    reply:
      "Your check-ins show sleep dipping on Sunday and Monday nights. I've moved your Sunday evening wind-down reminder 30 minutes earlier this week, nothing drastic, just a small default shift.",
  },
];

export const chatFallback =
  "I can help with your fitness, mental health, or diet milestones, explain how I generated them, walk through what data is shared, or help you connect a wearable. What would help most right now?";

export const suggestedPrompts = [
  "Show my fitness milestone",
  "Connect a wearable",
  "Is my data safe?",
  "How was this generated?",
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
    detail: "Engineering vs Sales, 4 days left",
    progress: 68,
    color: "brand",
  },
  {
    title: "Mindful Mornings",
    detail: "Company-wide, 3-minute check-ins",
    progress: 41,
    color: "positive",
  },
  {
    title: "Hydration Streak",
    detail: "Customer Success, personal streaks",
    progress: 82,
    color: "watch",
  },
];

// Continuous & Rewards pillar: wearables strategy replaces the old
// "digital twin" concept per the updated solution document.

export const wearableTiers = [
  {
    tier: "Tier 0",
    title: "Phone only",
    detail: "Steps and, on many phones, heart rate through Health Connect or HealthKit. Free, zero setup.",
    status: "Active for you",
  },
  {
    tier: "Tier 1",
    title: "Earn-back wearable",
    detail: "Weekly activity goals pay down a smartwatch's cost until it reaches zero, modeled on Discovery Vitality's mechanic.",
    status: "In progress",
  },
  {
    tier: "Tier 2",
    title: "Targeted clinical loan",
    detail: "A time-boxed continuous glucose monitor for employees a lab report flags as high-risk, such as a pre-diabetic HbA1c.",
    status: "Not applicable yet",
  },
];

export const connectedSources = [
  { name: "Google Health Connect", detail: "Android steps, heart rate, and sleep", connected: true },
  { name: "Apple HealthKit", detail: "iOS steps, heart rate, and sleep", connected: false },
  { name: "WhatsApp check-ins", detail: "Fallback for employees without a compatible phone", connected: true },
];

export const earnBack = {
  deviceName: "Noise ColorFit watch",
  originalCost: 2999,
  paidDown: 1860,
  weeksActive: 6,
  weeksTotal: 10,
};

export const weeklyActivity = [
  { day: "Mon", steps: 4200 },
  { day: "Tue", steps: 6100 },
  { day: "Wed", steps: 5300 },
  { day: "Thu", steps: 7800 },
  { day: "Fri", steps: 6600 },
  { day: "Sat", steps: 9200 },
  { day: "Sun", steps: 5100 },
];

export const hrKpis = [
  { label: "Monthly active engagement", value: "41%", sub: "category baseline sits under 10%", color: "positive" },
  { label: "Wearable / Health Connect opt-in", value: "34%", sub: "of eligible employees sharing continuous data", color: "brand" },
  { label: "30-day plan completion", value: "58%", sub: "of generated plans followed through", color: "watch" },
  { label: "Projected premium impact", value: "-6.2%", sub: "modeled at renewal, 24 to 36 month horizon", color: "positive" },
];

export const engagementTrend = [
  { month: "M1", engagement: 19 },
  { month: "M2", engagement: 25 },
  { month: "M3", engagement: 31 },
  { month: "M4", engagement: 36 },
  { month: "M5", engagement: 39 },
  { month: "M6", engagement: 41 },
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
    title: "AI wellness coaching from my lab report",
    detail: "Uses your lab values and check-ins to generate milestones and chat replies, grounded in a clinical content library.",
    default: true,
  },
  {
    key: "wearableSharing",
    title: "Wearable and biometric data sharing",
    detail: "A separate opt-in from the rest of the app. You can use Health Prime fully without ever turning this on.",
    default: false,
  },
  {
    key: "insurerSharing",
    title: "Share aggregate data with insurance underwriters",
    detail: "Fully anonymized, cohort-level only, used to explore premium optimization at renewal.",
    default: false,
  },
];

export const dpdpPoints = [
  "Notice, consent withdrawal, and erasure workflows are built ahead of the 13 November 2026 Consent Manager deadline, not added after the fact.",
  "Wellness data and HR or performance-management systems sit in separate data stores, with no integration path between them.",
  "Individual lab and wearable results are never shared with employers, only anonymized, cohort-level aggregates.",
  "Full right to access, correct, or withdraw consent for any data category, at any time.",
];

export const safetyPoints = [
  "Every flagged value is grounded in retrieval against a vetted clinical content library, not open-ended generation.",
  "An unusual reading or crisis-adjacent language escalates to a clinician, not the model.",
  "Outputs are framed as worth discussing with a doctor, never as a diagnosis.",
  "A sample of model outputs is reviewed on a fixed clinical audit schedule.",
];
