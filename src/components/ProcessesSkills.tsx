'use client';
import { useRef } from 'react';
import Button from './Button';
import NumberedListItem from './NumberedListItem';
import { useScroll, useTransform } from 'framer-motion';
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

export default function ProcessesSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    smooth: 10,
    offset: ['start center', 'end start']
  });
  const scale1 = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.8]);
  const scale2 = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.8]);
  const scale3 = useTransform(scrollYProgress, [0.5, 0.7], [1, 0.8]);
  const scale4 = useTransform(scrollYProgress, [0.65, 0.85], [1, 0.8]);

  return (
    <motion.div
      className="relative flex max-w-8xl flex-col items-center gap-12 py-24 md:grid md:grid-cols-2 md:items-start"
      initial={initial}
      whileInView={inView}
      viewport={{ once: true }}
    >
      <div
        className="flex flex-col items-center gap-12 md:sticky md:top-32 md:items-start"
        ref={containerRef}
      >
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

      <motion.div
        initial={initial}
        whileInView={inView}
        viewport={{ once: true }}
        ref={containerRef}
      >
        <div className="relative flex flex-col gap-5">
          <NumberedListItem
            scale={scale1}
            tag="01"
            title=" UX/UI Design"
            description="Transformando necessidades complexas em soluções intuitivas e cativantes. Combinando pesquisa, design visual e usabilidade, crio interfaces que encantam os usuários."
          />
          <NumberedListItem
            scale={scale2}
            tag="02"
            title="Web Design"
            description="Combinando estética e usabilidade, desenvolvo interfaces que oferecem uma experiência de usuário envolvente e intuitiva, ajudando a transformar ideias em realidades digitais impactantes."
          />
          <NumberedListItem
            scale={scale3}
            tag="03"
            title="Identidade visual"
            description="Crio marcas que comunicam de forma clara e impactante os valores e a essência de uma empresa, desenvolvendo identidades que se destacam e permanecem na mente do público."
          />
          <NumberedListItem
            scale={scale4}
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
      </motion.div>
      <Button className="md:hidden"> Mais sobre mim</Button>
    </motion.div>
  );
}
