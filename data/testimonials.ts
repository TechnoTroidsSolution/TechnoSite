export type Testimonial = {
  id: number;
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  rating: number;
  quote: string;
  project: string;
  results: string;
};

// We'll create data for the one card shown, but you can add more objects to this array
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Park",
    title: "Product Manager",
    company: "DataFlow Corp",
    // Using a placeholder image
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=192&q=80",
    rating: 5,
    quote:
      "From concept to deployment, every phase was handled with precision. The final product has transformed how our team collaborates and delivers results.",
    project: "Workflow Automation",
    results: "70% time savings",
  },
  {
    id: 2,
    name: " Park",
    title: "Product Manager",
    company: "DataFlow Corp",
    // Using a placeholder image
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=192&q=81",
    rating: 5,
    quote:
      "From concept to deployment, every phase was handled with precision. The final product has transformed how our team collaborates and delivers results.",
    project: "Workflow Automation",
    results: "70% time savings",
  },
];
