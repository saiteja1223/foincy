export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl: string;
}

export interface PricingPlan {
  title: string;
  price: number;
  features: string[];
  recommended?: boolean;
}