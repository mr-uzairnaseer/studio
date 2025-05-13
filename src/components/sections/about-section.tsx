
"use client";

import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About AuraWatch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start lg:max-w-5xl lg:mx-auto"> {/* Changed items-center to items-start */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-lg text-muted-foreground mb-4">
              AuraWatch is born from a commitment to fostering a safer and more authentic digital landscape. In an era of rapid content generation and sophisticated manipulation techniques, we recognized the critical need for accessible tools to identify harmful content and verify media integrity.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our project leverages state-of-the-art AI models to provide robust detection capabilities for hate speech and various forms of fake content. We aim to empower individuals, researchers, and organizations to navigate the digital world with greater confidence.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground">To provide powerful, explainable AI tools for detecting hate speech and fake content, promoting transparency and safety online.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground">A digital world where information is reliable, interactions are respectful, and harmful content is effectively mitigated.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto lg:max-w-none"
          >
            <Image
              src="https://picsum.photos/seed/aurawatchabout/800/800"
              alt="Team working on AuraWatch or abstract representation of digital safety"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-2xl"
              data-ai-hint="team collaboration technology"
            />
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-xl"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
