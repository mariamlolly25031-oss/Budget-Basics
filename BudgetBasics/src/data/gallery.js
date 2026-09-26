import needsvswants from "../assets/needs&wants.jpeg";
import chart50_30_20 from "../assets/Chart50_30_20.jpg";
import expenses from "../assets/expenses.jpeg";
import savingsgoal from "../assets/track.jpeg";
import monthlycycle from "../assets/monthlycycle.jpeg";
import savingchallenge from "../assets/savingChallenge.jpeg";
import smartspending from "../assets/habits.jpeg";
import moneyflow from "../assets/saving_goal.jpeg";

const learningData = [
  {
    id: 1,
    title: "Needs vs. Wants",
    topic: "Needs",
    type: "Infographic",
    description:
      "Learn how to tell the difference between essential expenses and things you simply want.",
    date: "2026-09-20",
    image: needsvswants,
    alt: "Infographic comparing essential needs with non-essential wants",

    details: {
      overview:
        "Understanding the difference between needs and wants is one of the foundations of responsible budgeting. Needs are things you require to live, study, and meet your basic responsibilities, while wants are things that make life more enjoyable but are not essential.",

      sections: [
        {
          heading: "Needs",
          text:
            "Needs are essential expenses that should usually be considered first when planning your money. Examples include food, transportation to school, educational materials, basic clothing, and necessary bills.",
        },
        {
          heading: "Wants",
          text:
            "Wants are non-essential things you may choose to spend money on. Examples include entertainment, extra shopping, eating out, games, and other optional purchases.",
        },
        {
          heading: "A simple question to ask",
          text:
            "Before spending, ask yourself: 'Do I need this right now, or do I simply want it?' Pausing to answer this question can help reduce unnecessary spending.",
        },
      ],

      tip:
        "A want is not automatically a bad purchase. The goal is to understand the difference so you can make intentional spending decisions.",
    },
  },

  {
    id: 2,
    title: "The 50-30-20 Budget Rule",
    topic: "Budgeting",
    type: "Infographic",
    description:
      "A simple way to divide your income between needs, wants, and savings.",
    date: "2026-09-18",
    image: chart50_30_20,
    alt: "Infographic showing the 50-30-20 budget split",

    details: {
      overview:
        "The 50/30/20 rule is a simple budgeting guideline that divides your available income into three broad categories: needs, wants, and savings.",

      sections: [
        {
          heading: "50% — Needs",
          text:
            "Around half of your income can be planned for essential expenses such as food, transportation, education, housing, and other necessary costs.",
        },
        {
          heading: "30% — Wants",
          text:
            "Around 30% can be used for non-essential spending such as entertainment, shopping, hobbies, and other personal wants.",
        },
        {
          heading: "20% — Savings",
          text:
            "Around 20% can be directed toward savings goals and building better financial habits.",
        },
      ],

      tip:
        "The 50/30/20 rule is a guideline, not a strict requirement. Your percentages can be adjusted based on your personal circumstances.",
    },
  },

  {
    id: 3,
    title: "Understanding Your Expenses",
    topic: "Expenses",
    type: "Infographic",
    description:
      "Learn how to identify where your money goes and organize your spending.",
    date: "2026-09-15",
    image: expenses,
    alt: "Infographic explaining different types of personal expenses",

    details: {
      overview:
        "Understanding your expenses means knowing where your money goes. Tracking your spending makes it easier to identify patterns, prioritize important costs, and notice areas where you may be spending more than expected.",

      sections: [
        {
          heading: "Fixed expenses",
          text:
            "Fixed expenses are costs that generally stay the same or change very little from one period to another.",
        },
        {
          heading: "Variable expenses",
          text:
            "Variable expenses can change depending on your activities and choices. Food, transportation, entertainment, and shopping may vary from month to month.",
        },
        {
          heading: "Track before you change",
          text:
            "Before trying to reduce your spending, first understand your current spending pattern. Recording expenses can show you where your money is actually going.",
        },
      ],

      tip:
        "Small expenses can add up. Tracking them gives you a clearer picture of your overall spending.",
    },
  },

  {
    id: 4,
    title: "Set a Savings Goal",
    topic: "Goals",
    type: "Infographic",
    description:
      "Turn your savings idea into a clear goal with a target amount and deadline.",
    date: "2026-09-12",
    image: savingsgoal,
    alt: "Infographic showing steps for creating a savings goal",

    details: {
      overview:
        "A savings goal gives your money a purpose. Instead of simply saying you want to save, define what you are saving for, how much you need, and how much you can contribute regularly.",

      sections: [
        {
          heading: "Choose a goal",
          text:
            "Start with something specific, such as saving for a course, device, school expense, or personal project.",
        },
        {
          heading: "Set a target",
          text:
            "Decide the total amount you need. A clear target makes it easier to measure your progress.",
        },
        {
          heading: "Plan your contributions",
          text:
            "Decide how much you can realistically contribute regularly. Consistent contributions can help turn a large target into smaller steps.",
        },
      ],

      tip:
        "A realistic savings goal is easier to maintain. Start with an amount that fits your available income and expenses.",
    },
  },

  {
    id: 5,
    title: "Monthly Budget Cycle",
    topic: "Budgeting",
    type: "Infographic",
    description:
      "Follow a simple monthly cycle to plan, track, review, and improve your budget.",
    date: "2026-09-10",
    image: monthlycycle,
    alt: "Infographic showing the monthly budget planning cycle",

    details: {
      overview:
        "A budget works best as an ongoing process. Instead of creating a plan once and forgetting about it, review your money regularly and use what you learn to improve your next budget.",

      sections: [
        {
          heading: "1. Plan",
          text:
            "Start by estimating your income and deciding how you want to allocate it across your expected expenses, wants, and savings.",
        },
        {
          heading: "2. Track",
          text:
            "Record your expenses during the month so you can compare your actual spending with your plan.",
        },
        {
          heading: "3. Review",
          text:
            "At the end of the period, look at what went well and where you spent more or less than expected.",
        },
        {
          heading: "4. Improve",
          text:
            "Use what you learned to make your next budget more realistic.",
        },
      ],

      tip:
        "Your first budget does not have to be perfect. The goal is to learn from each cycle.",
    },
  },

  {
    id: 6,
    title: "30-Day Saving Challenge",
    topic: "Saving",
    type: "Infographic",
    description:
      "Build a consistent saving habit with a simple 30-day savings challenge.",
    date: "2026-09-08",
    image: savingchallenge,
    alt: "Infographic showing a 30-day saving challenge",

    details: {
      overview:
        "A saving challenge can make saving feel more structured and motivating. The idea is to commit to saving regularly over a defined period.",

      sections: [
        {
          heading: "Choose an amount",
          text:
            "Decide how much you want to save during the challenge. Choose an amount that is realistic for your situation.",
        },
        {
          heading: "Create a schedule",
          text:
            "Decide whether you will save daily, weekly, or according to another schedule that works for you.",
        },
        {
          heading: "Track your progress",
          text:
            "Mark each successful contribution so you can see your progress toward the challenge target.",
        },
      ],

      tip:
        "The purpose of a saving challenge is not simply the final amount. It is also about developing a consistent saving habit.",
    },
  },

  {
    id: 7,
    title: "Smart Spending Habits",
    topic: "Spending",
    type: "Infographic",
    description:
      "Small changes in your spending habits can help you become more intentional with your money.",
    date: "2026-09-05",
    image: smartspending,
    alt: "Infographic showing smart spending habits",

    details: {
      overview:
        "Smart spending means making deliberate decisions about where your money goes instead of spending automatically.",

      sections: [
        {
          heading: "Pause before buying",
          text:
            "Give yourself time to think before making non-essential purchases. A short pause can help you decide whether the purchase is actually necessary.",
        },
        {
          heading: "Compare your priorities",
          text:
            "Consider whether a purchase supports something important to you or takes money away from another goal.",
        },
        {
          heading: "Watch repeated spending",
          text:
            "Small, frequent purchases can become significant over time. Reviewing repeated expenses can reveal spending patterns.",
        },
      ],

      tip:
        "Smart spending is about awareness, not avoiding every purchase. Give your money a purpose.",
    },
  },

  {
    id: 8,
    title: "Where Does Your Money Go?",
    topic: "Expenses",
    type: "Infographic",
    description:
      "Use simple categories to understand and monitor your everyday spending.",
    date: "2026-09-02",
    image: moneyflow,
    alt: "Infographic showing how money can be divided into spending categories",

    details: {
      overview:
        "Categorizing your spending helps you see how your money is distributed. Instead of looking at individual purchases separately, you can identify broader spending patterns.",

      sections: [
        {
          heading: "Create categories",
          text:
            "Group similar expenses together, such as food, transportation, education, entertainment, shopping, and utilities.",
        },
        {
          heading: "Look for patterns",
          text:
            "After organizing your expenses, look at which categories receive the most of your money.",
        },
        {
          heading: "Use what you learn",
          text:
            "Your spending patterns can help you decide where adjustments may be useful in your next budget.",
        },
      ],

      tip:
        "You cannot improve what you do not understand. Categorizing expenses makes your spending easier to see.",
    },
  },
];

export default learningData;