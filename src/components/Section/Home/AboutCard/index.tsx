import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="text-center cursor-pointer group/card">
      <div className="w-28 h-28 rounded-full group-hover/card:bg-slate-700 ring-2 ring-slate-700 text-slate-700 group-hover/card:text-white flex justify-center items-center mx-auto mb-4 transition-all duration-200">
        <Icon size="36px" />
      </div>
      <h3 className="text-slate-700 font-medium text-2xl">{title}</h3>
      <p className="text-center max-w-64 text-slate-700 mx-auto">{description}</p>
    </div>
  );
};

export default AboutCard;
