interface ServiceProps {
  title: string;
  tag: string;
}
export default function Service({ title, tag }: ServiceProps) {
  return (
    <div className="rounded-main flex gap-5 bg-primary-900 p-5 text-xl font-semibold text-white/50 md:p-7">
      <h4>{tag}</h4>
      <h4>{title}</h4>
    </div>
  );
}
