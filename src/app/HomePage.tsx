'use client';
import Button from 'src/components/Button';
import Card from 'src/components/Card';
import CubeTicker from 'src/components/CubeTicker';
import DreamProject from 'src/components/DreamProject';
import ProcessesSkills from 'src/components/ProcessesSkills';
import { ProjectList } from 'src/types/project';
import { motion } from 'framer-motion';

const transition = {
  type: 'spring',
  stiffness: 300,
  mass: 3,
  damping: 100
};

const initial = {
  y: 150,
  opacity: 0.001
};

const inView = {
  y: 0,
  opacity: 1,
  transition
};

interface HomePageProps {
  entries: ProjectList;
}

export default function HomePage({ entries }: HomePageProps) {
  return (
    <main className="flex max-w-full flex-col items-center px-5 pt-14 text-white md:pt-20">
      <div className="flex max-w-8xl flex-col items-center gap-12 pb-20 pt-12 md:py-24">
        <motion.div
          className="flex items-center gap-2 rounded-full border border-white/15 bg-gradient-tag px-3 py-1 text-sm text-white"
          whileInView={inView}
          viewport={{ once: true }}
          initial={initial}
        >
          <div className="text-lg">👋</div>
          Seja bem-vindo!
        </motion.div>
        <motion.hgroup
          className="text-center text-5xl font-bold leading-[58px] md:text-[72px] md:leading-[82px]"
          whileInView={{...inView, transition: { ...transition, delay: 0.1 }}}
          viewport={{ once: true }}
          initial={initial}
        >
          <h1>Hey! Eu sou o Lucas.</h1>
          <h1>Designer & Desenvolvedor.</h1>
        </motion.hgroup>
        <motion.p
          className="max-w-4xl text-center leading-7 text-white/50"
          whileInView={{...inView, transition: { ...transition, delay: 0.2 }}}
          viewport={{ once: true }}
          initial={initial}
        >
          Especialista em criar experiências digitais inovadoras para ajudar meus clientes a atingir
          seus objetivos.
        </motion.p>
      </div>
      <motion.div
        className="max-w-full overflow-hidden xl:max-w-8xl"
        whileInView={{...inView, transition: { ...transition, delay: 0.3 }}}

        viewport={{ once: true }}
        initial={{ y: 150, opacity: 0 }}
      >
        <CubeTicker />
      </motion.div>
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
