"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cpu, Palette, Wand2 } from "lucide-react";

const features = [
  {
    title: "AI Integration",
    description: "Seamlessly integrate with popular AI models like OpenAI, Anthropic, and Google PaLM.",
    icon: Brain
  },
  {
    title: "Visual Builder",
    description: "Drag-and-drop interface for building landing pages without coding.",
    icon: Palette
  },
  {
    title: "API Management",
    description: "Easily manage and monitor your AI API usage and performance.",
    icon: Cpu
  },
  {
    title: "One-Click Deploy",
    description: "Deploy your AI-powered landing pages with a single click.",
    icon: Wand2
  }
];

export function LandingFeatures() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="border-none shadow-none bg-transparent">
            <CardHeader>
              <feature.icon className="h-12 w-12 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}