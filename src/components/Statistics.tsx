const gradientText =
  'text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary-600 to-white leading-[58px]';
export default function Statistics() {
  return (
    <div className="flex w-full max-w-8xl pt-24">
      <div className="flex w-full flex-col items-center gap-12 rounded-[20px] bg-primary-900 px-8 py-5 md:w-full md:flex-row md:justify-between md:px-9">
        <div className="flex flex-col items-center">
          <p className={gradientText}>10+</p>
          <label className="font-medium text-white/50">Years of experience</label>
        </div>
        <div className="flex flex-col items-center">
          <p className={gradientText}>72+</p>
          <label className="font-medium text-white/50">Projects completed</label>
        </div>
        <div className="flex flex-col items-center">
          <p className={gradientText}>95%</p>
          <label className="font-medium text-white/50">Client satisfaction</label>
        </div>
        <div className="flex flex-col items-center">
          <p className={gradientText}>15</p>
          <label className="font-medium text-white/50">Design awards</label>
        </div>
      </div>
    </div>
  );
}
