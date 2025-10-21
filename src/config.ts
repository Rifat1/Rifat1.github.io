export const siteConfig = {
  name: "Abdur Rahman Abul Hossain",
  title: "Full Stack Software Developer",
  description: "Portfolio website of Abdur Rahman Abul Hossain",
  accentColor: "#1d4ed8",
  social: {
    email: "aabulhossain@mun.ca",
    linkedin: "https://www.linkedin.com/in/abdur-rahman-abul-hossain/",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/Rifat1",
  },
  aboutMe:
    "I am Abdur Rahman Abul Hossain, a Full Stack Software Developer based out of Canada. I have a passion for learning new technologies and expanding my knowledge on all things cloud. I enjoy building well-architected, highly available large scale cloud applications. I have hands-on experience in data migration, cloud-based applications, and ETL pipelines. Skilled in Python, Java, C#, JavaScript, NodeJS, MongoDB, PostgreSQL, and AWS. Proven record of building scalable APIs and automating workflows that improved efficiency by up to 95%",
  skills: ["Javascript", "React", "Node.js", "MongoDB", "PostgreSQL", "Python", "C#", "AWS", "Docker"],
  projects: [
    {
      name: "Downtime Data Analytics Dashboard",
      description:
        "Developed an analytics dashboard simulating a monitoring system for 300+ downtime events. Aggregated and visualized KPIs such as MTTR and failure frequency, providing actionable insights into performance and reliability trends. Executed SQL queries for root cause analysis and performance optimization.",
      link: "https://github.com/Rifat1/downtime-dashboard",
      skills: ["Python", "Pandas", "SQL", "Matplotlib", "Seaborn"],
    },
    {
      name: "StockDat ETL System",
      description: "Built ETL pipelines extracting and transforming financial data from multiple web and API sources. Automated reconciliation logic with Pydantic and reduced manual ETL time by 90%. Deployed Dockerized services to AWS EC2 with CI/CD, ensuring secure and scalable production.",
      link: "https://github.com/Rifat1/Data_Integration_ETL_StockDat",
      skills: ["Python", "FastAPI", "Pandas", "MongoDB", "Redis", "AWS EC2"],
    },
    {
      name: "Tweet Sentiment Classifier",
      description:
        "Trained a feedforward neural network on 1.6M tweets, achieving ~80% precision, recall, and F1-score. Implemented preprocessing, batching, and custom DataLoader for scalable NLP.",
      link: "https://github.com/Rifat1/Tweet-Sentiment-Classifier",
      skills: ["Python", "PyTorch", "scikit-learn", "seaborn", "Pandas", "NumPy"],
    },
  ],
  experience: [
    {
      company: "StockDat",
      title: "Full Stack Developer / Data Analyst",
      dateRange: "Jan 2024 - Jan 2025",
      bullets: [
        "Built and deployed a stock analytics platform using React, FastAPI, and MongoDB, serving 500+ stocks.",
        "Developed data migration and ETL pipelines with Pandas, Selenium, and APIs, transforming raw financial data into normalized schemas for analysis.",
        "Implemented validation with Pydantic and reconciliation logic, achieving 99% data accuracy across quarterly reports and compliance checks.",
        "Optimized backend APIs to deliver <500ms response times and ensure smooth integration with downstream analytics systems.",
        "Automated CI/CD pipelines with GitHub Actions to AWS EC2, cutting manual deployment by 95% and enabling consistent onboarding of new datasets.",
        "Configured Redis rate limiting, Nginx reverse proxy, and SSL automation for secure, scalable deployments aligned with data security best practices.",
      ],
    },
    {
      company: "Memorial University of Newfoundland (4 months Contract)",
      title: "Technology Assistant",
      dateRange: "Sep 2019 - Dec 2019",
      bullets: [
        "Designed and maintained a Wix-based blog, reaching 500+ visitors.",
        "Trained 10+ staff in digital publishing tools, reducing upload time by 30%.",
      ],
    },
    {
      company: "Memorial University of Newfoundland (4 months Contract)",
      title: "Public Engagement Research Assistant",
      dateRange: "Jun 2018 - Sep 2018",
      bullets: [
        "Prepared and analyzed datasets for senior faculty reports, improving reporting efficiency.",
        "Drafted Excel reports and summaries, ensuring clear and accurate communication of results.",
      ],
    },
  ],
  education: [
    {
      school: "Memorial University of Newfoundland",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2024",
      achievements: [
        "Data Structures and Algorithms, Operating Systems, Database Systems",
        "Web Programming, Computer Networks",
        "Software Engineering, Data Mining, Data Preparation",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2023",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
