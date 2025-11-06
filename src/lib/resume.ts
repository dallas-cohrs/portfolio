export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  github: string
}

export interface WorkExperience {
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | null // null means "Present"
  responsibilities: string[]
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface Education {
  degree: string
  school: string
  location: string
  startDate: string | null
  endDate: string
  highlights: string[]
}

export interface ResumeData {
  personalInfo: PersonalInfo
  professionalSummary: string
  workExperience: WorkExperience[]
  education: Education[]
  skills: SkillCategory[]
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Dallas Cohrs",
    title: "Full Stack Developer",
    email: "dallas.cohrs@gmail.com",
    phone: "+1 (303) 909-2640",
    location: "Denver, CO",
    github: "https://github.com/dallas-cohrs",
  },
  professionalSummary:
    "Curious and dedicated software developer with experience in programming, data systems, and cloud-based applications. Adept at solving complex problems and delivering clear, reliable results in collaborative environments. Able to quickly learn and implement new technologies.",
  workExperience: [
    {
      title: "Full Stack Developer",
      company: "Autotex Pty Ltd",
      location: "Sydney, Australia",
      startDate: "Apr 2025",
      endDate: "Oct 2025", // Present
      responsibilities: [
        "Built cloud-based tools for managing large automotive inventories.",
        "Maintained and optimized a database of more than 3 million auto parts across Australia.",
        "Upgraded ADEN, a database platform used by auto suppliers, wreckers, and resellers.",
        "Worked directly with national clients like Sydney Tools to improve operations and data workflows.",
        "Managed full-stack development and database integration tasks independently."
      ],
    },
    {
        title: "Behavioral Technician",
        company: "Behavioral Innovations",
        location: "Centennial, CO",
        startDate: "Nov 2024",
        endDate: "Feb 2025",
        responsibilities: [
          "Delivered one-on-one behavioral therapy to children diagnosed with ASD.",
          "Applied the principles of Applied Behavioral Analysis (ABA) to promote measurable developmental progress.",
          "Implemented individualized treatment plans in collaboration with clinical supervisors.",
          "Fostered strong relationships with clients and families through consistent communication and advocacy."
        ],
    },
    {
      title: "CAD Engineer",
      company: "Advanced Circuits",
      location: "Aurora, CO",
      startDate: "May 2023",
      endDate: "Mar 2024",
      responsibilities: [
        "Used and maintained proprietary FreeDFM software to prepare accurate PCB quotes.",
        "Worked closely with customers to refine designs and ensure smooth manufacturing.",
        "Helped troubleshoot issues in circuit layouts and guided improvements for better production results.",
        "Partnered with engineers and production teams to verify specifications and maintain quality standards."
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science (Incomplete)",
      school: "Colorado State University",
      location: "Fort Collins, CO",
      startDate: "2021",
      endDate: "2023",
      highlights: [
        "Coursework in Artificial Intelligence, Algorithms, and Software Engineering.",
        "Earned strong grades and credits toward degree before relocating to pursue professional work.",
      ],
    },
    {
      degree: "High School Diploma",
      school: "Legend High School",
      location: "Parker, CO",
      startDate: null,
      endDate: "Graduated May 2021",
      highlights: [
        "Graduated with Honors",
      ],
    },
  ],
  skills: [
    {
      name: "Languages & Frameworks",
      skills: ["JavaScript", "TypeScript", "Python", "React", "Next.js", "React Native", "Expo"],
    },
    {
      name: "Cloud & Deployment",
      skills: ["Firebase", "Vercel", "Render", "AWS (EC2, S3)", "Cloudflare"],
    },
    {
      name: "Web & App Development",
      skills: ["REST APIs", "full-stack architecture", "UI/UX design", "mobile-first interfaces"],
    },
    {
      name: "Database & Data Management",
      skills: ["PostgreSQL", "MongoDB", "data modeling", "optimization"],
    },
    {
      name: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code", "CI/CD workflows"],
    },
    {
      name: "Other Skills",
      skills: ["problem-solving", "cross-team collaboration", "system scalability", "learning new technologies"],
    },
  ],
}

