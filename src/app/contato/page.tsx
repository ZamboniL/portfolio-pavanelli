export default function Contact() {
  return (
    <main className="flex flex-col text-white px-5 md:px-0 md:pt-20  max-w-3xl">
      <div className="py-24 flex flex-col gap-8 md:gap-6 md:items-center">
        <h2 className="text-[32px] leading-[41px] font-semibold md:text-[64px] md:leading-[74px]">
          {"Let's work together"}
        </h2>
        <p className="text-white/50 font-medium md:text-center">
          {"I'd"} love to learn more about your project and how I can assist you.
          Feel free to share your project details using the form below. If you
          prefer to email instead, you can reach out to me at{" "}
          <a href="mailto:aalayrasoolmowlana@gmail.com" className="text-white">
            aalayrasoolmowlana@gmail.com
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-3.5 pb-16 md:pb-0">
        <div className="grid grid-cols-2 gap-3.5">
          <input
            type="text"
            placeholder="Nome"
            className="px-5 py-2.5 rounded-2xl bg-zinc-900"
          />
          <input
            type="text"
            placeholder="Email"
            className="px-5 py-2.5 rounded-2xl bg-zinc-900"
          />
        </div>
        <textarea
          placeholder="Tell me more about your project"
          className="px-5 py-2.5 rounded-2xl bg-zinc-900 w-full resize-none"
          rows={6}
        />
        <button className="w-full font-bold bg-violet-700 rounded-2xl px-5 py-2.5 ">
          Send
        </button>
      </div>
    </main>
  );
}
