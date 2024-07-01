import { type FAQItem } from "~/types";

export const RESERVATIONS_FAQ = [
  {
    question: "Are tables and chairs available?",
    answer:
      "Yes, there is a $200.00 setup/take down fee if you are using our tables and chairs.",
  },
  {
    question: "Is a security deposit required?",
    answer:
      "Yes, a security deposit of $500.00 is due at the time of contract. This deposit is refundable if the hall and grounds are left clean and undamaged. If additional cleaning is needed, $100.00 per hour will be deducted from your deposit.",
  },
  {
    question: "When is the rent due?",
    answer:
      "Rent is due 60 days prior to the event. Additionally, a copy of Liability Insurance for the event must be provided at this time.",
  },
  {
    question: "What are the kitchen facilities like?",
    answer: "The kitchen is a warming kitchen only. Cooking is not allowed.",
  },
  {
    question: "Are there any requirements for serving alcohol?",
    answer:
      "Yes, parties serving alcohol with 100 or more guests are required to have a Security Guard on duty during the party.",
  },
  {
    question: "How late can my event go?",
    answer:
      "All events must end at midnight. Since we are in a neighborhood, music should be turned down and doors closed by 10:00 pm to respect our neighbors.",
  },
] as const satisfies FAQItem[];
