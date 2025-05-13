"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="get-started" className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-card p-8 md:p-12 rounded-xl shadow-2xl text-center relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/20 rounded-full filter blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl animate-pulse animation-delay-2000"></div>
          
          <Zap className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Enhance Your Content Safety?
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
            Join AuraWatch today and take control of your digital media. Upload, analyze, and gain insights with our cutting-edge AI technology.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/analyze">Start Analyzing Now</Link>
            </Button>
          </div>
           <p className="mt-6 text-sm text-muted-foreground">
            Free to get started. No credit card required.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
