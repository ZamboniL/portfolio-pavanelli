import Button from "src/components/Button";
import Card from "src/components/Card";
import NumberedListItem from "src/components/NumberedListItem";

export default function Home() {
  return (
    <main className="text-white pt-20 px-5 flex flex-col items-center">
      <div className="pt-12 pb-20 md:py-24 flex flex-col items-center gap-12 max-w-8xl">
        <div className="flex gap-3 text-sm text-white items-center px-3 py-1 border border-white/15 rounded-full">
          <div className="w-2.5 h-2.5 bg-violet-700 rounded-full" />
          Available for freelance
        </div>
        <hgroup className="text-5xl leading-[58px] font-bold text-center md:text-[72px] md:leading-[82px]">
          <h1>Hey, I'm Daniel.</h1>
          <h1>I'm a Designer & Developer.</h1>
        </hgroup>
        <p className="text-white/50 text-center leading-7 max-w-4xl">
          Daniel Bennett is a versatile designer & developer based in the UK,
          dedicated to crafting innovative and visually appealing digital
          experiences.
        </p>
      </div>
      <div className="flex justify-center">
        <ul className="flex gap-20 overflow-hidden">
          <li>
            <img src="/cube/notion.png" alt="" height={35} width={35} />
          </li>
          <li>
            <img src="/cube/notion.png" alt="" height={35} width={35} />
          </li>
          <li>
            <img src="/cube/notion.png" alt="" height={35} width={35} />
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-12 py-24 max-w-8xl">
        <div className="flex flex-col gap-12 md:gap-5 md:grid md:grid-cols-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Button>See all projects</Button>
      </div>
      <div className="flex relative flex-col gap-12 items-center py-24 max-w-8xl md:grid md:grid-cols-2 md:items-start">
        <div className="flex flex-col gap-12 items-center md:sticky md:top-32 md:items-start">
          <div className="font-medium text-white/50 px-4 py-2 border border-white/15 rounded-full">
            Skills & Expertise
          </div>
          <h3 className="text-[32px] leading-10 font-semibold md:text-5xl md:leading-[58px]">
            My Skills that Shine, <br />
            Expertise You Can Trust
          </h3>
        </div>
        <div className="relative flex flex-col gap-5">
          <NumberedListItem />
          <NumberedListItem />
          <NumberedListItem />
          <NumberedListItem />
          <NumberedListItem />
        </div>
        <Button>More about me</Button>
      </div>
      <div
        className="flex flex-col items-center gap-10 rounded-[20px] p-8 border border-white/15 md:w-full md:max-w-8xl md:py-14"
        style={{
          background:
            "radial-gradient(100% 100% at 50% 3.33067e-14%, rgba(0, 0, 0, 0) 0%, rgb(79, 0, 196) 51.0417%, rgb(172, 117, 255) 100%)",
        }}
      >
        <div className="flex flex-col items-center text-center gap-8 md:w-full md:max-w-[600px]">
          <h3 className="text-4xl font-semibold md:text-5xl">Have a dream project?</h3>
          <p className="text-white/50">
            Let's transform your vision into stunning reality. Reach out today
            and start the journey to a remarkable brand presence.
          </p>
        </div>
        <div className="font-semibold text-[32px] px-12 py-6 rounded-full bg-black md:text-[64px]">
          Let's talk
        </div>
      </div>
    </main>
  );
}
