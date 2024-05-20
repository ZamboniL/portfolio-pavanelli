const gradientText =
  "text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary-600 to-white leading-[58px]";
export default function Statistics() {
  return (
    <div className="pt-24 w-full max-w-8xl flex">
      <div className="w-full bg-primary-900 rounded-[20px] flex flex-col items-center gap-12 px-8 md:px-9 py-5 md:flex-row md:w-full md:justify-between">
        <div className="flex flex-col items-center">
          <p className={gradientText}>10+</p>
          <label className="font-medium text-white/50">
            Years of experience
          </label>
        </div>
        <div className="flex flex-col items-center">
          <p className={gradientText}>72+</p>
          <label className="font-medium text-white/50">
            Projects completed
          </label>
        </div>
        <div className="flex flex-col items-center">
          <p className={gradientText}>95%</p>
          <label className="font-medium text-white/50">
            Client satisfaction
          </label>
        </div>
        <div className="flex flex-col items-center">
          <p className={gradientText}>15</p>
          <label className="font-medium text-white/50">Design awards</label>
        </div>
      </div>
    </div>
  );
}
