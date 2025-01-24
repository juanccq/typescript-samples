 // Define the Task and Status interfaces
export interface Task {
  id: number;
  icon: string;
  status: string;
  title: string;
  content: string;
  index: number;
}

export interface Status {
  status: string;
  icon: string;
  color: string;
}

// Define an array of tasks (data) and an array of statuses
const data = [
  {
    id: 1,
    icon: "⭕️",
    status: "open",
    title: "Learn Typescript",
    content: "Get an understanding of the types in Typescript",
    index: 0,
  },
  {
    id: 2,
    icon: "⭕️",
    status: "open",
    title: "Practice Typescript",
    content: "Take my newfound knowledge and apply it to continously improve",
    index: 1,
  },
  {
    id: 3,
    icon: "⭕️",
    status: "open",
    title: "Land a Job",
    content: "Apply for jobs and use my knowledge to ace the interview",
    index: 2,
  },
  {
    id: 4,
    icon: "⭕️",
    status: "open",
    title: "Retire",
    content: "Have a long successful career and then retire",
    index: 3,
  },
];

const statuses = [
  {
    status: "open",
    icon: "⭕️",
    color: "#EB5A46",
  },
  {
    status: "in progress",
    icon: "🔆️",
    color: "#00C2E0",
  },
  {
    status: "in review",
    icon: "📝",
    color: "#C377E0",
  },
  {
    status: "done",
    icon: "✅",
    color: "#3981DE",
  },
];

// Export the data and statuses arrays
export { data, statuses };