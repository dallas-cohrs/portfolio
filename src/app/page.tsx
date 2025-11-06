import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header Section */}
        <section className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Your Name
            </h1>
            <p className="mt-2 text-xl text-muted-foreground">
              Your Title | Your Role
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              your.email@example.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              +1 (234) 567-890
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Your Location
            </div>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
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
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">
                Add your professional summary here. Describe your experience,
                expertise, and what makes you unique. Keep it concise but
                impactful. This section should give employers a quick overview
                of who you are and what you bring to the table.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Work Experience */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Work Experience
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl">Job Title</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    Jan 2020 - Present
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Company Name | Location
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>Key achievement or responsibility</li>
                  <li>Another significant contribution</li>
                  <li>Important project or initiative you led</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl">Previous Job Title</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    Jan 2018 - Dec 2019
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Previous Company | Location
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>Accomplishment or responsibility</li>
                  <li>Project or initiative</li>
                  <li>Skills demonstrated</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Skills
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "Python", "Java"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Frameworks & Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "Express"].map((skill) => (
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

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS", "PostgreSQL"].map((skill) => (
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
          </div>
        </section>
      </div>
    </div>
  )
}
