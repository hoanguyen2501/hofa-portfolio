'use client';

import Section from './Section';
import { Card, CardHeader, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Carousel } from './ui/Carousel';
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
  const techSlides = techStacks.map((stack) => {
    const IconComponent = categoryIcons[stack.category] || Code2;

    return (
      <Card key={stack.category} hover className="h-full">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <IconComponent size={20} />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              {stack.category}
            </h3>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {stack.items.map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  });

  return (
    <Section id="tech-stack" title="Tech Stack">
      <Carousel showDots autoplay autoplayDelay={4000}>
        {techSlides}
      </Carousel>
    </Section>
  );
}
