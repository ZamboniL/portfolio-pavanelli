'use client';
import Card from 'src/components/Card';
import DreamProject from 'src/components/DreamProject';
import { ProjectList } from 'src/types/project';
import { motion } from 'framer-motion';

const transition = {
  type: 'spring',
  stiffness: 300,
  mass: 3,
  damping: 100
};

const inView = {
  y: 0,
  opacity: 1,
  transition
};

interface ProjectsPageProps {
  entries: ProjectList;
}

export default function ProjectsPage({ entries }: ProjectsPageProps) {
  return (
    <main className="flex flex-col px-5 text-white md:pt-20 2xl:px-0">
      <div className="flex flex-col items-center gap-12 py-24">
        <motion.h2
          initial={{ y: 142, opacity: 0.001 }}
          whileInView={inView}
          viewport={{ once: true }}
          className="text-[32px] font-semibold leading-[41px] md:text-[64px] md:leading-[74px]"
        >
          Projetos
        </motion.h2>
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
