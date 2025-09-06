import { Card } from "@/components/ui/card"

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Next.js", level: 88 },
  { name: "Python", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "AWS", level: 65 },
  { name: "Docker", level: 72 },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Skills & Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-sm text-foreground/60">{skill.level}%</span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
