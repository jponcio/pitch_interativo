
// Fix: Added missing React import to resolve 'React' namespace error for React.ReactNode
import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Pillar {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

export interface MarketData {
  label: string;
  value: number;
  description: string;
}
