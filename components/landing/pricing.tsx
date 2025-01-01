"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for trying out our platform",
    features: [
      "1 Landing Page",
      "Basic AI Integration",
      "Community Support",
      "Basic Analytics"
    ]
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professional developers and teams",
    features: [
      "Unlimited Landing Pages",
      "Advanced AI Integration",
      "Priority Support",
      "Advanced Analytics",
      "Custom Domain",
      "Team Collaboration"
    ]
  }
];

export function LandingPricing() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the plan that best fits your needs. All plans include full access to our AI integration features.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-4">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{plan.name === "Starter" ? "Get Started" : "Subscribe"}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}