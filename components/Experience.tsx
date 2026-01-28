import Section from './Section';
import { experiences } from '@/lib/data';
import { Briefcase, Calendar, Users } from 'lucide-react';

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-12">
        {experiences.map((exp, expIndex) => (
          <div key={expIndex} className="space-y-6">
            {/* Company Header */}
            <div className="flex items-start gap-4 pb-4 border-b-2 border-primary/20">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                <Briefcase size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground">
                  {exp.company}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-foreground/70">
                  <span className="font-semibold text-primary">{exp.role}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  {exp.location && (
                    <>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            {exp.projects && exp.projects.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exp.projects.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="bg-secondary/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-primary hover:bg-secondary/20 transition-all duration-300 group"
                  >
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.name}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/60">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {project.period}
                        </span>
                        {project.team && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1.5">
                              <Users size={12} />
                              {project.team}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {project.description && (
                      <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    )}

                    {project.responsibilities && project.responsibilities.length > 0 && (
                      <div className="mb-4">
                        <h5 className="text-xs font-semibold text-foreground/80 uppercase tracking-wide mb-2">
                          Key Contributions
                        </h5>
                        <ul className="space-y-1.5">
                          {project.responsibilities.slice(0, 3).map((item, index) => (
                            <li
                              key={index}
                              className="text-sm text-foreground/70 leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-primary before:font-bold"
                            >
                              {item}
                            </li>
                          ))}
                          {project.responsibilities.length > 3 && (
                            <li className="text-xs text-foreground/50 italic pl-4">
                              +{project.responsibilities.length - 3} more
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/30">
                        {project.technologies.slice(0, 6).map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 rounded bg-primary/5 text-foreground/60 border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="text-xs px-2 py-1 text-foreground/50">
                            +{project.technologies.length - 6}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
