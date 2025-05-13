import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AnalyzePage() {
  return (
    <Container className="py-12 md:py-20">
      <div className="flex flex-col items-center text-center">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Analyze Content</CardTitle>
            <CardDescription className="text-lg text-muted-foreground pt-2">
              This is where the content analysis functionality will be implemented.
              Upload your text, audio, or video files to detect hate speech and fake content.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-8 border-2 border-dashed border-border rounded-lg text-muted-foreground">
              [Upload Area Placeholder]
            </div>
            <p className="text-sm text-muted-foreground">
              Future features: File upload, selection of analysis type, progress display, and results.
            </p>
            <Button asChild size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
