"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function ApiKeysPage() {
  const [provider, setProvider] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleSave = () => {
    // TODO: Implement API key saving
    console.log("Saving API key for provider:", provider);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">API Configuration</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Add New API Key</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={provider} onValueChange={setProvider}>
            <SelectTrigger>
              <SelectValue placeholder="Select AI Provider" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="openai">OpenAI</SelectItem>
              <SelectItem value="anthropic">Anthropic</SelectItem>
              <SelectItem value="google">Google PaLM</SelectItem>
            </SelectContent>
          </Select>
          
          <Input
            type="password"
            placeholder="Enter API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          
          <Button onClick={handleSave}>Save API Key</Button>
        </CardContent>
      </Card>
    </div>
  );
}