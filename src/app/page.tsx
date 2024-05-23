import { getEntries } from 'src/api';
import Button from 'src/components/Button';
import Card from 'src/components/Card';
import CubeTicker from 'src/components/CubeTicker';
import DreamProject from 'src/components/DreamProject';
import NumberedListItem from 'src/components/NumberedListItem';

async function highlightedEntries() {
  const entries = await getEntries('fields.highlight=true&order=fields.order');

  return entries.data;
}

export default async function Home() {
  const entries = await highlightedEntries();
  return (
    <main className="flex max-w-full flex-col items-center px-5 pt-14 text-white md:pt-20">
      <div className="flex max-w-8xl flex-col items-center gap-12 pb-20 pt-12 md:py-24">
        <div className="flex items-center gap-3 rounded-full border border-white/15 px-3 py-1 text-sm text-white">
          <div className="">👋</div>
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
      <div className="relative flex max-w-8xl flex-col items-center gap-12 py-24 md:grid md:grid-cols-2 md:items-start">
        <div className="flex flex-col items-center gap-12 md:sticky md:top-32 md:items-start">
          <div className="rounded-full border border-white/15 px-4 py-2 font-medium text-white/50">
            Processos & Habilidades
          </div>
          <h3 className="text-[32px] font-semibold leading-10 md:text-5xl md:leading-[58px]">
            Habilidades que se destacam. <br />
            Experiência que você pode confiar.
          </h3>
          <Button href="/sobre" className="hidden md:flex">
            Mais sobre mim
          </Button>
        </div>
        <div className="relative flex flex-col gap-5">
          <NumberedListItem
            tag="01"
            title=" UX/UI Design"
            description="Transformando necessidades complexas em soluções intuitivas e cativantes. Combinando pesquisa, design visual e usabilidade, crio interfaces que encantam os usuários."
          />
          <NumberedListItem
            tag="02"
            title="Web Design"
            description="Combinando estética e usabilidade, desenvolvo interfaces que oferecem uma experiência de usuário envolvente e intuitiva, ajudando a transformar ideias em realidades digitais impactantes."
          />
          <NumberedListItem
            tag="03"
            title="Identidade visual"
            description="Crio marcas que comunicam de forma clara e impactante os valores e a essência de uma empresa, desenvolvendo identidades que se destacam e permanecem na mente do público."
          />
          <NumberedListItem
            tag="04"
            title="Research"
            description="Utilizando métodos qualitativos e quantitativos, como entrevistas, testes de usabilidade e análise de dados, coleto insights valiosos sobre comportamentos e necessidades dos usuários."
          />
          <NumberedListItem
            tag="05"
            title="Desenvolvimento Front-End"
            description="Utilizando tecnologias como NextJS, React, Framer, crio experiências de usuário fluidas e envolventes, otimizadas para desempenho em diversos dispositivos."
          />
        </div>
        <Button className="md:hidden"> Mais sobre mim</Button>
      </div>
      <DreamProject />
    </main>
  );
}
