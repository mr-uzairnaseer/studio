
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function AnalyzePage() {
  return (
    <Container className="py-12 md:py-20">
      <div className="flex flex-col items-center text-center">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Analyze Content</CardTitle>
            <CardDescription className="text-lg text-muted-foreground pt-2">
              Analyze text content for hate speech and other issues. Future updates will include audio and video analysis.
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
                  rows={10}
                  className="mt-2 w-full rounded-md border-input bg-background p-3 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <Button size="lg" className="w-full sm:w-auto">
                Analyze Text
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Currently supports text analysis. Future features: File upload for audio/video, selection of analysis type, progress display, and detailed results.
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

