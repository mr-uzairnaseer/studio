"use client";

import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { AuraWatchLogo } from '@/components/ui/aurawatch-logo';
import { Container } from './container';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col space-y-4">
            <AuraWatchLogo iconSize={24} textSize="text-xl" />
            <p className="text-sm text-muted-foreground">
              Shining a light on digital integrity. Advanced AI for a safer online world.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Product</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li><Link href="#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
                <li><Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary">How It Works</Link></li>
                <li><Link href="/analyze" className="text-sm text-muted-foreground hover:text-primary">Analyze Content</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li> {/* Placeholder */}
                <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li> {/* Placeholder */}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Connect</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                    <Twitter size={18} /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                    <Github size={18} /> GitHub
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} AuraWatch. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built with passion for a safer digital future.</p>
        </div>
      </Container>
    </footer>
  );
}
