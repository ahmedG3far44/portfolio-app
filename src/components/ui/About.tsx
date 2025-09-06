import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-primary-foreground">
            AG
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Ahmed G3far Kamal</h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-6">Full Stack Developer</p>
        </div>

        <Card className="p-8 mb-8 bg-card border-border">
          <p className="text-lg leading-relaxed text-pretty">
            Passionate full stack developer with 3+ years of experience building modern web applications. I specialize
            in React, Node.js, and cloud technologies, creating scalable solutions that deliver exceptional user
            experiences. Always eager to learn new technologies and tackle challenging problems.
          </p>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button variant="outline" size="lg" className="border-border hover:bg-accent/10 bg-transparent">
            <a href="#projects">View My Work</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
