// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'Tailwind CSS', level: 95, color: 'bg-cyan-500' },
    { name: 'Node.js', level: 75, color: 'bg-green-500' },
    { name: 'UI/UX Design', level: 80, color: 'bg-purple-500' },
    { name: 'TypeScript', level: 70, color: 'bg-blue-600' },
  ];

  return (
    <section id="skills" className="flex items-center justify-center py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary h-3 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Skills;