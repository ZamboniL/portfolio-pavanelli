interface ServiceProps {
  title: string;
  tag: string;
}
export default function Service({ title, tag }: ServiceProps) {
  return (
    <div className="flex gap-5 rounded-[20px] bg-primary-900 p-5 text-xl font-semibold text-white/50 md:p-7">
      <h4>{tag}</h4>
      <h4>{title}</h4>
    </div>
  );
}
