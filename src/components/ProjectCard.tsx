import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ProjectCard({ title, description, icon }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-emerald-100 rounded-lg">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-emerald-600 hover:text-emerald-700">
        <span className="mr-2">Learn more</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}