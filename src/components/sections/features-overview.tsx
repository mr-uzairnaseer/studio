"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Container } from '@/components/layout/container';
import { ShieldAlert, ScanFace, FileText, Mic, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: ShieldAlert,
    title: 'Hate Speech Detection',
    description: 'Identify abusive, offensive, and harmful content across text, audio, and video. Our AI flags problematic content with high accuracy.',
    details: [
        { icon: FileText, text: "Text Analysis" },
        { icon: Mic, text: "Audio Processing" },
        { icon: Video, text: "Video Content Scanning" },
    ]
  },
  {
    icon: ScanFace,
    title: 'Fake Content Identification',
    description: 'Uncover deepfake videos, synthetic audio, and manipulated visuals. Protect against disinformation and ensure media authenticity.',
     details: [
        { icon: Video, text: "Deepfake Video Detection" },
        { icon: Mic, text: "Synthetic Audio Analysis" },
        { icon: ScanFace, text: "Manipulated Visuals Check" },
    ]
  },
];

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export default function FeaturesOverviewSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Core Capabilities</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            AuraWatch provides a comprehensive suite of tools to analyze and verify digital content, ensuring a safer and more trustworthy online experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.custom
              key={feature.title}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className="flex"
            >
              <Card className="bg-card/50 hover:bg-card/70 transition-colors duration-300 shadow-lg w-full flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4 pb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-semibold text-foreground">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base text-muted-foreground mb-4">
                    {feature.description}
                  </CardDescription>
                   <ul className="space-y-2 mt-4">
                    {feature.details.map((detail) => (
                      <li key={detail.text} className="flex items-center text-sm text-muted-foreground">
                        <detail.icon className="h-4 w-4 mr-2 text-primary" />
                        {detail.text}
                      </li>
                    ))}
                  </ul>
                  {feature.title.includes("Hate Speech") && (
                     <p className="mt-3 text-sm text-primary font-medium">Includes Context Report Generation</p>
                  )}
                </CardContent>
              </Card>
            </motion.custom>
          ))}
        </div>
      </Container>
    </section>
  );
}
