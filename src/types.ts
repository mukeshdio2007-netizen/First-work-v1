export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'enterprise' | 'devtools' | 'research';
  categoryLabel: string;
  status: string;
  statusType: 'prototype' | 'open' | 'incubating';
  technologies: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface DifferentiatorItem {
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
