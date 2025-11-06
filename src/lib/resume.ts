export interface PersonalInfo {
  name: string
  title: string
  role: string
  email: string
  phone: string
  location: string
  linkedin: string
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

export interface ResumeData {
  personalInfo: PersonalInfo
  professionalSummary: string
  workExperience: WorkExperience[]
  skills: SkillCategory[]
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    role: "Your Role",
    email: "your.email@example.com",
    phone: "+1 (234) 567-890",
    location: "Your Location",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
  },
  professionalSummary:
    "Add your professional summary here. Describe your experience, expertise, and what makes you unique. Keep it concise but impactful. This section should give employers a quick overview of who you are and what you bring to the table.",
  workExperience: [
    {
      title: "Job Title",
      company: "Company Name",
      location: "Location",
      startDate: "Jan 2020",
      endDate: null, // Present
      responsibilities: [
        "Key achievement or responsibility",
        "Another significant contribution",
        "Important project or initiative you led",
      ],
    },
    {
      title: "Previous Job Title",
      company: "Previous Company",
      location: "Location",
      startDate: "Jan 2018",
      endDate: "Dec 2019",
      responsibilities: [
        "Accomplishment or responsibility",
        "Project or initiative",
        "Skills demonstrated",
      ],
    },
  ],
  skills: [
    {
      name: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "Express"],
    },
    {
      name: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "PostgreSQL"],
    },
  ],
}

