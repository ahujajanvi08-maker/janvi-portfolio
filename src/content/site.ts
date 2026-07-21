export const site = {
  name: "Janvi Ahuja",
  title: "Janvi Ahuja",
  description:
    "Curious enough to explore. Driven enough to build. Strategy, consulting, and real estate at the intersection of business and technology.",
  url: "https://janviahuja.com",
} as const;

export const navigation = [
  { label: "My Story", href: "#story" },
  { label: "Experience", href: "#experience" },
  { label: "Things I've Built", href: "#work" },
  { label: "Connect", href: "#connect" },
] as const;

export const hero = {
  firstName: "Janvi",
  lastName: "Ahuja",
  tagline: [
    "Curious enough to explore.",
    "Driven enough to build.",
  ] as const,
  lead: "Interested in solving complex business challenges at the intersection of strategy, technology, operations, and sustainability.",
  footer: {
    resume: { label: "Download Resume", href: "/resume.pdf" },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/janviahuja",
    },
    email: "janvi.ahuja26@imperial.ac.uk",
    location: "London, UK",
  },
} as const;

export const story = {
  heading: "I'm Janvi.",
  paragraphs: [
    "I've always been drawn to problems that sit at the intersection of people, business, and technology. That curiosity led me to pursue a dual major in Data Science and Mathematics at Penn State, where I built a strong analytical foundation while learning how data can drive better decisions.",
    "Along the way, I realised solving meaningful problems isn't only about analysis. It's about understanding people, making decisions under uncertainty, and turning ideas into action.",
    "Since graduating, I've worked across real estate development, business operations, marketing analytics, and technology-enabled strategy. From digitising operational systems to building financial models and leading business initiatives, each experience has strengthened my interest in solving business problems that create real impact.",
    "Over time, my curiosity has expanded beyond improving individual businesses to understanding the broader systems they operate within. Working in real estate development exposed me to how thoughtful operational decisions, such as repurposing construction waste into new building materials, can create meaningful impact. It sparked my interest in how strategy, technology, and data can help businesses solve complex challenges, operate more sustainably, and create long-term value across industries.",
    "Currently, I'm pursuing my MSc in Management at Imperial Business School to deepen my understanding of strategy, leadership, finance, and decision-making while preparing for a career where business strategy, technology, and operational execution come together to solve meaningful challenges across industries.",
    "I'm motivated by building systems that scale, learning across disciplines, and creating practical solutions that make organisations work better.",
  ] as const,
} as const;

export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  dates: string;
  achievements: readonly string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "kabir-builders",
    company: "Kabir Builders",
    role: "Project & Data Strategy Associate",
    dates: "Jun 2025 – Present",
    achievements: [
      "Led the migration of 100% of active project accounts to a cloud-based ERP, digitizing sales, expense, and financial reporting processes and improving reporting efficiency by 60%.",
      "Developed IRR/NPV models to optimize pricing and unit-positioning strategies, and Phase 2-unit mix, shifting 4BHK:5BHK ratio from 3:2 to 5:1 based on sales data and customer feedback, projected to improve absorption and returns to 18–22% IRR.",
      "Drove organization-wide system adoption by personally training 50+ site and office employees, embedding standardized digital workflows that improved technology adherence by 40% and increased user adoption by 50%.",
      "Redesigned the project's go-to-market strategy into an integrated digital-offline model, leveraging outdoor media and creator partnerships (20K+ audience), while building a 5-member marketing team that increased inbound inquiries by ~30%.",
      "Negotiated and closed a 7-year lease with MediZone Hospital (Jabalpur) to bring a multi-specialty facility with ER services to Umaria, addressing a critical gap in emergency healthcare access.",
    ],
  },
  {
    id: "mp-birla-cement",
    company: "MP Birla Cement (Aditya Birla Group)",
    role: "District Operations Dealer / Business Owner",
    dates: "Jul 2025 – Present",
    achievements: [
      "Managed district-level sales and operations across Khajuraho and Samrat product lines by overseeing 15+ folks handling order intake, billing, party-wise receivables, and company coordination to ensure timely fulfilment and clean account reconciliation.",
      "Led weekly sales reviews to plan monthly strategies and launch targeted retailer incentive schemes, driving ~30% growth in low-season sales across 6–8 towns.",
      "Drove volume-led performance in a retail-heavy market, achieving average sales of ~5.8 MT/day, with ~80% product mix from Khajuraho, while navigating festive-season and monsoon-driven demand cyclicality across 6–8 towns.",
      "Scaled monthly sales volumes from 148MT to a peak of 488MT, averaging ~9.1 MT/day, earning the Gold Dealer Tier in a year.",
    ],
  },
  {
    id: "mp-birla-intern",
    company: "MP Birla Group (Aditya Birla Group)",
    role: "Marketing Data Analyst Intern",
    dates: "Jun 2024 – Aug 2024",
    achievements: [
      "Developed and validated a sales forecasting model using 2 years of district-level sales data across 5 regional branches and 20 districts (~1.3M+ units), analysing demand trends to guide marketing prioritization, inventory planning, and production alignment.",
      "Translated forecasts into marketing strategy by identifying high-growth and high-volatility districts through actual vs. projected sales analysis, informing targeted promotions, pricing schemes, and budget allocation across priority markets.",
    ],
  },
  {
    id: "penn-state",
    company: "Penn State University",
    role: "Learning Assistant, Department of Mathematics",
    dates: "Jan 2023 – Dec 2023",
    achievements: [
      "Supported 40+ students per section in Calculus II through in-class worksheet facilitation (3×/week), led weekly 2-hour problem-solving sessions for ~15 students, and held 2 hours/week of virtual office hours, resulting in stronger conceptual clarity, improved problem-solving, and exam preparedness in a high-difficulty quantitative course.",
    ],
  },
];

export type ProjectEntry = {
  id: string;
  title: string;
  dates: string;
  hoverStory: string;
  bullets: readonly string[];
};

export const projects: ProjectEntry[] = [
  {
    id: "budget-planner",
    title: "Personal Budget Planner – Full Stack Web App",
    dates: "Jan 2025 – Apr 2025",
    hoverStory:
      "Built to replace the spreadsheet I kept abandoning every month.",
    bullets: [
      "Built a budget tracking app with Node.js, Express, and MongoDB for real-world financial workflows",
      "Implemented REST APIs, CSV ingestion, dashboards, and threshold-based spending alerts",
      "Followed agile development with user feedback and testing across the full SDLC",
    ],
  },
  {
    id: "cod-analysis",
    title: "Call of Duty Gameplay Data Analysis",
    dates: "Nov 2024 – Dec 2024",
    hoverStory:
      "Wanted to know if the game mode you pick actually changes how much XP you earn.",
    bullets: [
      "Full-cycle analysis of multiplayer gameplay data using two player datasets — cleaning, integration, and visualization",
      "Investigated how GameType affects TotalXP using regression modeling and exploratory data analysis",
      "Built linear regression, logistic regression, Naive Bayes, and Random Forest models",
      "Visualized trends through box plots and scatter plots",
    ],
  },
  {
    id: "diabetes-ml",
    title: "Diabetes Prediction using ML",
    dates: "Aug 2024 – Dec 2024",
    hoverStory: "96.91% accuracy — early signals in routine health data matter.",
    bullets: [
      "Predicted diabetes using healthcare data with age, BMI, and glucose features through cleaning and encoding",
      "Built Logistic Regression, Random Forest, and XGBoost models achieving up to 96.91% accuracy",
      "Evaluated performance via precision, recall, and F1-score with recommendations for ensemble improvements",
    ],
  },
  {
    id: "game-recommendations",
    title: "Video Game Recommendation Systems",
    dates: "Jan 2024 – May 2024",
    hoverStory: "40% faster runtime on Roar — 41M interactions won't fit on a laptop.",
    bullets: [
      "Built a collaborative filtering recommender using ALS in PySpark on 41M+ user interactions",
      "Used the Roar supercomputer for scalable processing, reducing runtime by 40%",
      "Improved prediction accuracy by 12% through hyperparameter tuning and RMSE validation",
    ],
  },
  {
    id: "stock-dashboard",
    title: "Stock Market Visualization Dashboard",
    dates: "Mar 2024 – May 2024",
    hoverStory:
      "Made market trends readable without opening a terminal.",
    bullets: [
      "Built an interactive dashboard for AMZN and MSFT stock analysis using Kaggle market data",
      "Implemented dual line and bar chart visualizations with dynamic updates based on user interaction",
      "Built with HTML, CSS, JavaScript, and Chart.js for novice and experienced users",
    ],
  },
  {
    id: "uber-weather",
    title: "Uber Rides Weather Impact Analysis",
    dates: "Jan 2023 – May 2023",
    hoverStory: "Does rain actually make your Uber more expensive? I had to know.",
    bullets: [
      "Analyzed Uber pricing and availability against weather data including temperature, rain, and cloud cover",
      "Implemented data cleaning and visualization in R, uncovering a slight negative correlation between temperature and price",
      "Resolved timestamp formatting to merge datasets and improve hourly comparison accuracy",
    ],
  },
];

export const connect = {
  greeting: "Thanks for stopping by.",
  body: "I built this website the same way I approach most challenges—with curiosity, a willingness to learn, and the belief that the best ideas come from exploring different perspectives.",
  closing:
    "If something here resonated with you, I'd love to start a conversation.",
  signOff: "Janvi",
  email: "hello@janviahuja.com",
} as const;

export const sectionAtmosphere = [
  { id: "hero", bg: "#faf6f0", accent: "#e8e0d4" },
  { id: "story", bg: "#b2dff7", accent: "#9b87d9" },
  { id: "experience", bg: "#b2dff7", accent: "#9b87d9" },
  { id: "work", bg: "#b2dff7", accent: "#9b87d9" },
  { id: "connect", bg: "#b2dff7", accent: "#9b87d9" },
] as const;
