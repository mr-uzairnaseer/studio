"use client";

import { Container } from '@/components/layout/container';
import { motion } from 'framer-motion';
import { UploadCloud, Cpu, FileSearch, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: UploadCloud,
    title: 'Upload Your Content',
    description: 'Easily upload text, audio, or video files through our secure web interface. We support various formats for your convenience.',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Analysis',
    description: 'Our advanced AI models process your content, scanning for hate speech and potential manipulations using cutting-edge algorithms.',
  },
  {
    icon: FileSearch,
    title: 'Receive Insights',
    description: 'Get clear flags for detected issues. For hate speech, receive a detailed context report explaining the findings.',
  },
  {
    icon: ShieldCheck,
    title: 'Promote Integrity',
    description: 'Use the insights to ensure content safety, verify authenticity, and contribute to a more responsible digital environment.',
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 0.3, // Stagger + initial delay
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-secondary/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Simple Steps to Digital Clarity</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            AuraWatch streamlines content analysis into an intuitive process. Here’s how you can leverage our platform:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.custom
              key={step.title}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className="flex"
            >
              <div className="bg-card p-6 rounded-lg shadow-lg text-center flex flex-col items-center transition-all duration-300 hover:shadow-primary/20 hover:scale-105">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground flex-grow">{step.description}</p>
              </div>
            </motion.custom>
          ))}
        </div>
      </Container>
    </section>
  );
}
