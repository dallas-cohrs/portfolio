import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Phone, Github } from "lucide-react"
import { resumeData } from "@/lib/resume"

export default function Home() {
  const { personalInfo, professionalSummary, workExperience, education, skills } =
    resumeData

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header Section */}
        <section className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {personalInfo.name}
            </h1>
            <p className="mt-2 text-xl text-muted-foreground">
              {personalInfo.title}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              {personalInfo.phone}
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {personalInfo.location}
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </section>

        <Separator />

        {/* Professional Summary */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Professional Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            {professionalSummary}
          </p>
        </section>

        <Separator />

        {/* Work Experience */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Work Experience
          </h2>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">
                      {job.startDate} - {job.endDate || "Present"}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {job.company} | {job.location}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <span className="text-sm text-muted-foreground">
                      {edu.startDate ? `${edu.startDate} – ${edu.endDate}` : edu.endDate}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {edu.school} – {edu.location}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Skills
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
