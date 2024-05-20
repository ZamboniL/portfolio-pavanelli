import Button from "src/components/Button";
import Card from "src/components/Card";
import DreamProject from "src/components/DreamProject";
import NumberedListItem from "src/components/NumberedListItem";

export default function Home() {
  return (
    <main className="text-white pt-14 md:pt-20 px-5 flex flex-col items-center">
      <div className="pt-12 pb-20 md:py-24 flex flex-col items-center gap-12 max-w-8xl">
        <div className="flex gap-3 text-sm text-white items-center px-3 py-1 border border-white/15 rounded-full">
          <div className="w-2.5 h-2.5 bg-primary-400 rounded-full" />
          Available for freelance
        </div>
        <hgroup className="text-5xl leading-[58px] font-bold text-center md:text-[72px] md:leading-[82px]">
          <h1>Hey, {"I'm"} Daniel.</h1>
          <h1>{"I'm"} a Designer & Developer.</h1>
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
      <div className="flex flex-col gap-12 py-24 items-center max-w-8xl">
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
          <Button className="hidden md:flex">More about me</Button>
        </div>
        <div className="relative flex flex-col gap-5">
          <NumberedListItem />
          <NumberedListItem />
          <NumberedListItem />
          <NumberedListItem />
          <NumberedListItem />
        </div>
        <Button className="md:hidden">More about me</Button>
      </div>
      <DreamProject />
    </main>
  );
}
