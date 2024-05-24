import { getEntries } from 'src/api';
import Button from 'src/components/Button';
import Card from 'src/components/Card';
import CubeTicker from 'src/components/CubeTicker';
import DreamProject from 'src/components/DreamProject';
import ProcessesSkills from 'src/components/ProcessesSkills';

async function highlightedEntries() {
  const entries = await getEntries('fields.highlight=true&order=fields.order');

  return entries.data;
}

export default async function Home() {
  const entries = await highlightedEntries();
  return (
    <main className="flex max-w-full flex-col items-center px-5 pt-14 text-white md:pt-20">
      <div className="flex max-w-8xl flex-col items-center gap-12 pb-20 pt-12 md:py-24">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-gradient-tag px-3 py-1 text-sm text-white">
          <div className="text-lg">👋</div>
          Seja bem-vindo!
        </div>
        <hgroup className="text-center text-5xl font-bold leading-[58px] md:text-[72px] md:leading-[82px]">
          <h1>Hey! Eu sou o Lucas.</h1>
          <h1>Designer & Desenvolvedor.</h1>
        </hgroup>
        <p className="max-w-4xl text-center leading-7 text-white/50">
          Especialista em criar experiências digitais inovadoras para ajudar meus clientes a atingir
          seus objetivos.
        </p>
      </div>
      <div className="max-w-full overflow-hidden xl:max-w-8xl">
        <CubeTicker />
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
        <Button href="/portfolio">Ver todos os projetos</Button>
      </div>
      <ProcessesSkills />
      <DreamProject />
    </main>
  );
}
