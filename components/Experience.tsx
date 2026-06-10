'use client';

import { useState } from 'react';
import Section from './Section';
import { experiences } from '@/lib/data';
import { Briefcase, Calendar, Users, X, ChevronRight } from 'lucide-react';

type Project = (typeof experiences)[number]['projects'][number];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-background border border-border rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm flex items-start justify-between gap-4 p-6 border-b border-border rounded-t-2xl">
          <div>
            <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
            <div className="flex flex-wrap items-center gap-3 mt-1 text-base font-normal text-muted-text">
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
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 p-1.5 rounded-lg hover:bg-secondary/30 text-muted-text hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {project.description && (
            <p className="text-base font-normal text-muted-text leading-relaxed">{project.description}</p>
          )}

          {project.responsibilities && project.responsibilities.length > 0 && (
            <div>
              <h5 className="text-sm font-semibold text-muted-text uppercase tracking-wide mb-3">
                Key Contributions
              </h5>
              <ul className="space-y-2">
                {project.responsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="text-base font-normal text-muted-text leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-primary before:font-bold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h5 className="text-sm font-semibold text-muted-text uppercase tracking-wide mb-3">
                Technologies
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm px-2 py-1 rounded bg-primary/5 font-normal text-muted-text border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
                <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                <div className="flex flex-wrap items-center gap-3 mt-1 font-normal text-muted-text">
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
                    className="bg-secondary/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-primary hover:bg-secondary/20 transition-all duration-300 group flex flex-col"
                  >
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.name}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-base font-normal text-muted-text">
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
                      <p className="text-base font-normal text-muted-text leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>
                    )}

                    {project.responsibilities && project.responsibilities.length > 0 && (
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-muted-text uppercase tracking-wide mb-2">
                          Key Contributions
                        </h5>
                        <ul className="space-y-1.5">
                          {project.responsibilities.slice(0, 3).map((item, index) => (
                            <li
                              key={index}
                              className="text-base font-normal text-muted-text leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-primary before:font-bold"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/30">
                        {project.technologies.slice(0, 6).map((tech, index) => (
                          <span
                            key={index}
                            className="text-sm px-2 py-1 rounded bg-primary/5 font-normal text-muted-text border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="text-sm px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20 font-medium">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    )}

                    {((project.responsibilities && project.responsibilities.length > 3) ||
                      (project.technologies && project.technologies.length > 6)) && (
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors self-start"
                      >
                        View full details
                        <ChevronRight size={14} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </Section>
  );
}
