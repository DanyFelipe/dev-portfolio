export interface Props {
  dates: string;
  title: string;
  projectUrl?: string;
  description: string;
  technologies: string[];
  image?: string;
  status?: string; // e.g., "Live", "In Development", "Completed"
}
