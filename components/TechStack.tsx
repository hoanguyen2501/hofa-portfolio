import Section from './Section';
import { techStacks } from '@/lib/data';
import { Code2, Database, Cloud, Wrench, Layout, LucideIcon, Layers } from 'lucide-react';

// Icon mapping for categories
const categoryIcons: Record<string, LucideIcon> = {
  'Languages': Code2,
  'Backend': Layers,
  'Databases': Database,
  'Architecture': Layout,
  'Cloud & DevOps': Cloud,
  'Tools': Wrench,
  'Frontend': Code2,
};

export default function TechStack() {
  return (
    <Section id="tech-stack" title="Tech Stack">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStacks.map((stack) => {
          const IconComponent = categoryIcons[stack.category] || Code2;

          return (
            <div
              key={stack.category}
              className="bg-secondary/20 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <IconComponent size={20} />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {stack.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-2 py-1 rounded-md bg-background/50 font-normal text-muted-text"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
