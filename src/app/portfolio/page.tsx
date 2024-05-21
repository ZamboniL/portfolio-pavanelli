import { getEntries } from 'src/api';
import Card from 'src/components/Card';
import DreamProject from 'src/components/DreamProject';

async function allEntries() {
  const entries = await getEntries('order=fields.order');

  return entries.data;
}

export default async function Portfolio() {
  const entries = await allEntries();
  return (
    <main className="flex flex-col px-5 text-white md:pt-20 2xl:px-0">
      <div className="flex flex-col items-center gap-12 py-24">
        <h2 className="text-[32px] font-semibold leading-[41px] md:text-[64px] md:leading-[74px]">
          Portfolio showcase
        </h2>
        <div className="flex max-w-8xl flex-col gap-12 md:grid md:grid-cols-2 md:gap-5">
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
      </div>
      <DreamProject />
    </main>
  );
}
