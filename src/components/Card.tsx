export default function Card() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h4 className="text-xl font-semibold">AutoGizmo</h4>
        <p className="text-sm text-white/50">
          Branding & Digital Marketing (2023)
        </p>
      </div>
      <img
        src="/card-example.png"
        alt=""
        className="rounded-2xl w-full aspect-[1.675_/_1]"
      />
    </div>
  );
}
