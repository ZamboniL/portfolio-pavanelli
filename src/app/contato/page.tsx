export default function Contact() {
  return (
    <main className="flex max-w-3xl flex-col px-5 text-white md:pt-20  2xl:px-0">
      <div className="flex flex-col gap-8 py-24 md:items-center md:gap-6">
        <h2 className="text-[32px] font-semibold leading-[41px] md:text-[64px] md:leading-[74px]">
          {"Let's work together"}
        </h2>
        <p className="font-medium text-white/50 md:text-center">
          {"I'd"} love to learn more about your project and how I can assist you. Feel free to share
          your project details using the form below. If you prefer to email instead, you can reach
          out to me at{' '}
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
            className="rounded-2xl bg-primary-900 px-5 py-2.5"
          />
          <input
            type="text"
            placeholder="Email"
            className="rounded-2xl bg-primary-900 px-5 py-2.5"
          />
        </div>
        <textarea
          placeholder="Tell me more about your project"
          className="w-full resize-none rounded-2xl bg-primary-900 px-5 py-2.5"
          rows={6}
        />
        <button className="w-full rounded-2xl bg-primary-600 px-5 py-2.5 font-bold ">Send</button>
      </div>
    </main>
  );
}
