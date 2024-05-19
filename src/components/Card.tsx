export default function Card() {
  return (
    <div className="relative flex flex-col gap-6 md:h-full md:max-h-[400px]">
      <div className="md:absolute md:z-10 md:bottom-5 md:left-5">
        <h4 className="text-xl font-semibold">AutoGizmo</h4>
        <p className="text-sm text-white/50 md:text-base md:font-medium">
          Branding & Digital Marketing (2023)
        </p>
      </div>
      <div className="relative w-full rounded-2xl max-h-full">
        <div className="hidden md:block w-full h-full absolute top-0 left-0 bg-gradient-to-b from-white/0 from-50% to-black opacity-50" />
        <img
          src="/card-example.png"
          alt=""
          className="w-full rounded-2xl max-h-full  object-cover"
        />
      </div>
    </div>
  );
}
