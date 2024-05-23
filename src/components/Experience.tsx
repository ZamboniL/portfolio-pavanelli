interface ExperienceProps {
  period: string;
  company: string;
  title: string;
  description: string;
}

export default function Experience({ company, description, period, title }: ExperienceProps) {
  return (
    <div className="flex flex-col gap-6 border-b border-white/15 pb-8 md:grid md:grid-cols-2">
      <p className="font-medium text-white/50">{period}</p>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-semibold">{company}</h4>
          <p className="text-sm text-white/50">{title}</p>
        </div>
        <p className="font-medium text-white/50">{description}</p>
      </div>
    </div>
  );
}
