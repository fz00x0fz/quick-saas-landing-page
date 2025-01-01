"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface Template {
  id: string;
  name: string;
  description: string;
  content: string;
}

interface TemplateEditorProps {
  template: Template | null;
}

export function TemplateEditor({ template }: TemplateEditorProps) {
  const [name, setName] = useState(template?.name || "");
  const [description, setDescription] = useState(template?.description || "");
  const [content, setContent] = useState(template?.content || "");

  if (!template) {
    return (
      <Card className="p-6">
        <div className="text-center text-muted-foreground">
          Select a template to edit
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 space-y-4">
      <div className="space-y-2">
        <Input
          placeholder="Template Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Textarea
          placeholder="Template Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Textarea
          placeholder="Template Content (HTML/CSS)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[300px] font-mono"
        />
      </div>
      
      <div className="flex justify-end space-x-2">
        <Button variant="outline">Preview</Button>
        <Button>Save Changes</Button>
      </div>
    </Card>
  );
}