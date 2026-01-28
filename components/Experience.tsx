'use client';

import Section from './Section';
import { Card, CardHeader, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Carousel } from './ui/Carousel';
import { experiences } from '@/lib/data';
import { Briefcase, Calendar, Users } from 'lucide-react';

export default function Experience() {
  const projectSlides = experiences.flatMap((exp) =>
    (exp.projects || []).map((project, projectIndex) => (
      <Card key={`${exp.company}-${projectIndex}`} hover className="h-full">
        <CardHeader>
          {/* Company Badge */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
              <Briefcase size={16} />
            </div>
            <span className="text-sm font-semibold text-primary">{exp.company}</span>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-bold text-foreground">{project.name}</h4>
            <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/70">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {project.period}
              </span>
              {project.team && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Users size={14} />
                    {project.team}
                  </span>
                </>
              )}
            </div>
          </div>
          <p className="text-foreground/70 mt-3 leading-relaxed text-sm">
            {project.description}
          </p>
        </CardHeader>

        <CardContent>
          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-foreground/80 mb-2">
                Technologies
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 8).map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 8 && (
                  <Badge variant="primary">+{project.technologies.length - 8} more</Badge>
                )}
              </div>
            </div>
          )}

          {/* Responsibilities */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div>
              <h5 className="text-sm font-semibold text-foreground/80 mb-2">
                Key Responsibilities
              </h5>
              <ul className="space-y-2">
                {project.responsibilities.slice(0, 3).map((responsibility, respIndex) => (
                  <li
                    key={respIndex}
                    className="text-sm text-foreground/70 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
                  >
                    {responsibility}
                  </li>
                ))}
                {project.responsibilities.length > 3 && (
                  <li className="text-sm text-foreground/60 italic pl-4">
                    +{project.responsibilities.length - 3} more responsibilities
                  </li>
                )}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    ))
  );

  return (
    <Section id="experience" title="Work Experience">
      <Carousel showDots autoplay autoplayDelay={6000}>
        {projectSlides}
      </Carousel>
    </Section>
  );
}

