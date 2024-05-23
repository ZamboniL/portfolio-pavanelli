interface NumberedListItemProps {
  tag: string;
  title: string;
  description: string;
}

export default function NumberedListItem({ description, tag, title }: NumberedListItemProps) {
  return (
    <div
      className="sticky top-20 z-0 flex gap-8 rounded-[20px] bg-gradient-to-b from-[rgba(15,_15,_15,_0.5)] to-[rgb(29,_0,_66)]
    p-8 shadow-[rgba(255,_255,_255,_0.5)_0px_0px_2px_0px_inset] backdrop-blur-md md:top-32"
    >
      <h4 className="text-xl font-semibold">{tag}</h4>
      <div className="flex flex-col gap-5">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="font-medium leading-7 text-white/50">{description}</p>
      </div>
    </div>
  );
}
