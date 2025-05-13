// src/ai/flows/generate-context-report.ts
'use server';

/**
 * @fileOverview Generates a context report for hate speech detection.
 *
 * - generateContextReport - A function that generates a context report for hate speech.
 * - GenerateContextReportInput - The input type for the generateContextReport function.
 * - GenerateContextReportOutput - The return type for the generateContextReport function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateContextReportInputSchema = z.object({
  text: z.string().describe('The text to analyze for hate speech.'),
  flaggedCategory: z.string().describe('The category of hate speech flagged (e.g., abusive, offensive).'),
  probability: z.number().describe('The probability score of the hate speech detection.'),
  keyPhrases: z.array(z.string()).describe('Key phrases contributing to the hate speech label.'),
});
export type GenerateContextReportInput = z.infer<typeof GenerateContextReportInputSchema>;

const GenerateContextReportOutputSchema = z.object({
  report: z.string().describe('A detailed context report explaining the hate speech detection.'),
});
export type GenerateContextReportOutput = z.infer<typeof GenerateContextReportOutputSchema>;

export async function generateContextReport(input: GenerateContextReportInput): Promise<GenerateContextReportOutput> {
  return generateContextReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateContextReportPrompt',
  input: {schema: GenerateContextReportInputSchema},
  output: {schema: GenerateContextReportOutputSchema},
  prompt: `You are an AI assistant specialized in generating context reports for hate speech detection.

  Based on the following information, generate a detailed report explaining why the given text was flagged as hate speech.
  Highlight the key phrases that contributed to the classification and explain the category of hate speech.

  Text: {{{text}}}
  Flagged Category: {{{flaggedCategory}}}
  Probability Score: {{{probability}}}
  Key Phrases: {{#each keyPhrases}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Report:
  `,
});

const generateContextReportFlow = ai.defineFlow(
  {
    name: 'generateContextReportFlow',
    inputSchema: GenerateContextReportInputSchema,
    outputSchema: GenerateContextReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
