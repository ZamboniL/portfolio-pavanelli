export default function Card() {
  return (
    <div className="relative flex flex-col gap-6 md:h-full md:max-h-[400px]">
      <div className="md:absolute md:bottom-5 md:left-5 md:z-10">
        <h4 className="text-xl font-semibold">AutoGizmo</h4>
        <p className="text-sm text-white/50 md:text-base md:font-medium">
          Branding & Digital Marketing (2023)
        </p>
      </div>
      <div className="relative max-h-full w-full rounded-2xl">
        <div className="absolute left-0 top-0 hidden size-full bg-gradient-to-b from-white/0 from-50% to-black opacity-50 md:block" />
        <img
          src="/card-example.png"
          alt=""
          className="max-h-full w-full rounded-2xl  object-cover"
        />
      </div>
    </div>
  );
}
