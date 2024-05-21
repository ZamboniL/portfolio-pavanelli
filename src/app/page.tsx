import { getEntries } from 'src/api';
import Button from 'src/components/Button';
import Card from 'src/components/Card';
import DreamProject from 'src/components/DreamProject';
import NumberedListItem from 'src/components/NumberedListItem';

async function highlightedEntries() {
  const entries = await getEntries('fields.highlight=true&order=fields.order');

  return entries.data;
}

export default async function Home() {
  const entries = await highlightedEntries();
  return (
    <main className="flex flex-col items-center px-5 pt-14 text-white md:pt-20">
      <div className="flex max-w-8xl flex-col items-center gap-12 pb-20 pt-12 md:py-24">
        <div className="flex items-center gap-3 rounded-full border border-white/15 px-3 py-1 text-sm text-white">
          <div className="size-2.5 rounded-full bg-primary-400" />
          Available for freelance
        </div>
        <hgroup className="text-center text-5xl font-bold leading-[58px] md:text-[72px] md:leading-[82px]">
          <h1>Hey, {"I'm"} Daniel.</h1>
          <h1>{"I'm"} a Designer & Developer.</h1>
        </hgroup>
        <p className="max-w-4xl text-center leading-7 text-white/50">
          Daniel Bennett is a versatile designer & developer based in the UK, dedicated to crafting
          innovative and visually appealing digital experiences.
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
      <div className="flex max-w-8xl flex-col items-center gap-12 py-24">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-5">
          {entries.items.map((e) => (
            <Card
              key={e.sys.id}
              title={e.fields.title}
              subtitle={e.fields.subtitle}
              slug={e.fields.slug}
              link={e.fields.link}
              image={
                entries.includes.Asset.find((asset) => asset.sys.id === e.fields.image?.sys.id)
                  ?.fields.file.url
              }
            />
          ))}
        </div>
        <Button href="/portfolio">See all projects</Button>
      </div>
      <div className="relative flex max-w-8xl flex-col items-center gap-12 py-24 md:grid md:grid-cols-2 md:items-start">
        <div className="flex flex-col items-center gap-12 md:sticky md:top-32 md:items-start">
          <div className="rounded-full border border-white/15 px-4 py-2 font-medium text-white/50">
            Skills & Expertise
          </div>
          <h3 className="text-[32px] font-semibold leading-10 md:text-5xl md:leading-[58px]">
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
