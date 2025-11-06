import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { ProjectImage } from "@/components/project-image"

interface Project {
  id: string
  title: string
  description: string
  image: string
  link: string
  github?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Project Title 1",
    description:
      "A comprehensive description of your project. Explain what it does, the technologies used, and key features. This helps potential employers understand your technical capabilities.",
    image: "/placeholder-project.jpg",
    link: "https://example.com",
    github: "https://github.com/yourusername/project1",
  },
  {
    id: "2",
    title: "Project Title 2",
    description:
      "Another project description highlighting different skills and technologies. Showcase the diversity of your work and your ability to solve various types of problems.",
    image: "/placeholder-project.jpg",
    link: "https://example.com",
    github: "https://github.com/yourusername/project2",
  },
  {
    id: "3",
    title: "Project Title 3",
    description:
      "Describe your third project here. Include details about the challenge you solved, the approach you took, and the results achieved.",
    image: "/placeholder-project.jpg",
    link: "https://example.com",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            A collection of my work showcasing various skills and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden">
              <div className="relative h-48 w-full bg-muted">
                <ProjectImage src={project.image} alt={project.title} />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex gap-2">
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="flex-1"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </a>
                </Button>
                {project.github && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                      aria-label="View source code on GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

