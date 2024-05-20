export default function DreamProject() {
  return (
    <div
      className="flex flex-col items-center gap-10 rounded-[20px] p-8 border border-white/15 md:w-full md:max-w-8xl md:py-14"
      style={{
        background:
          "radial-gradient(100% 100% at 50% 3.33067e-14%, rgba(0, 0, 0, 0) 0%, rgb(79, 0, 196) 51.0417%, rgb(172, 117, 255) 100%)",
      }}
    >
      <div className="flex flex-col items-center text-center gap-8 md:w-full md:max-w-[600px]">
        <h3 className="text-4xl font-semibold md:text-5xl">
          Have a dream project?
        </h3>
        <p className="text-white/50">
          {"Let's"} transform your vision into stunning reality. Reach out today
          and start the journey to a remarkable brand presence.
        </p>
      </div>
      <div className="font-semibold text-[32px] px-12 py-6 rounded-full bg-black md:text-[64px]">
        {"Let's"} talk
      </div>
    </div>
  );
}
