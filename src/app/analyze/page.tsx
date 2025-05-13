
"use client";

import type { ChangeEvent } from 'react';
import { useState } from 'react';
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input"; // Added Input component

function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export default function AnalyzePage() {
  const [textContent, setTextContent] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(event.target.files);
    }
  };

  const handleAnalyze = () => {
    // Placeholder for analysis logic
    // This function would eventually decide whether to analyze textContent or files
    console.log("Analyzing content...");
    if (textContent) {
      console.log("Text content:", textContent);
    }
    if (files && files.length > 0) {
      console.log("Files selected:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <Container className="py-12 md:py-20">
      <div className="flex flex-col items-center text-center">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Analyze Content</CardTitle>
            <CardDescription className="text-lg text-muted-foreground pt-2">
              Analyze text, audio, video, or image content. Paste text or upload files below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-left">
            <div className="space-y-4">
              <div>
                <Label htmlFor="content-input" className="text-base font-medium">
                  Paste Text Content
                </Label>
                <Textarea
                  id="content-input"
                  placeholder="Enter or paste your text here for analysis..."
                  rows={8}
                  className="mt-2 w-full rounded-md border-input bg-background p-3 shadow-sm focus:border-primary focus:ring-primary"
                  value={textContent}
                  onChange={(e) => setTextContent(e.target.value)}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or
                  </span>
                </div>
              </div>
              
              <div>
                <Label htmlFor="file-upload" className="text-base font-medium">
                  Upload Files (Audio, Video, Image, Text Docs)
                </Label>
                <Input
                  id="file-upload"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  accept="audio/*,video/*,image/*,text/*,.pdf,.doc,.docx,.rtf,.odt"
                  className="mt-2 w-full rounded-md border-input bg-background p-2 shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 cursor-pointer"
                />
              </div>

              {files && files.length > 0 && (
                <div className="mt-2 space-y-1 text-sm text-muted-foreground bg-muted p-3 rounded-md">
                  <p className="font-medium text-foreground">Selected files:</p>
                  <ul className="list-disc list-inside max-h-32 overflow-y-auto">
                    {Array.from(files).map((file, index) => (
                      <li key={index} className="truncate" title={file.name}>
                        {file.name} ({formatBytes(file.size)})
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" size="sm" className="p-0 h-auto text-xs" onClick={() => setFiles(null)}>Clear files</Button>
                </div>
              )}
              
              <Button size="lg" className="w-full sm:w-auto" onClick={handleAnalyze} disabled={!textContent && (!files || files.length === 0)}>
                Analyze Content
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              Our AI will process your content to detect hate speech and identify potential fake media. Context reports are generated for hate speech.
            </p>
            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
