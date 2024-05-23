export default function DreamProject() {
  return (
    <div
      className="flex flex-col items-center gap-10 rounded-[20px] border border-white/15 p-8 md:w-full md:max-w-8xl md:py-14"
      style={{
        background:
          'radial-gradient(100% 100% at 50% 3.33067e-14%, rgba(0, 0, 0, 0) 0%, rgb(79, 0, 196) 51.0417%, rgb(172, 117, 255) 100%)'
      }}
    >
      <div className="flex flex-col items-center gap-8 text-center md:w-full md:max-w-[600px]">
        <h3 className="text-4xl font-semibold md:text-5xl">Vamos conversar?</h3>
        <p className="text-white/50">
          Vamos transformar sua ideia em uma realidade impressionante! Entre em contato hoje mesmo e
          vamos juntos começar essa jornada.
        </p>
      </div>
      <div className="rounded-full bg-black px-12 py-6 text-[32px] font-semibold md:text-[64px]">
        Vamos!
      </div>
    </div>
  );
}
