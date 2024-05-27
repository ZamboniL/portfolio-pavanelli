'use client';
import ContactForm from 'src/components/ContactForm';
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

export default function Contact() {
  return (
    <main className="flex max-w-3xl flex-col px-5 text-white md:pt-20  2xl:px-0">
      <div className="flex flex-col gap-8 py-24 md:items-center md:gap-6">
        <motion.h2
          className="text-[32px] font-semibold leading-[41px] md:text-[64px] md:leading-[74px]"
          initial={initial}
          whileInView={inView}
          viewport={{ once: true }}
        >
          Vamos trabalhar juntos.
        </motion.h2>
        <motion.p
          className="font-medium text-white/50 md:text-center"
          initial={initial}
          whileInView={{ ...inView, transition: { ...transition, delay: 0.1 } }}
          viewport={{ once: true }}
        >
          Adoraria saber mais sobre seu projeto e como posso ajudá-lo. Sinta-se à vontade para
          compartilhar todos os detalhes usando o formulário abaixo. Se preferir enviar um e-mail,
          você pode entrar em contato comigo em
          <a href="mailto:aalayrasoolmowlana@gmail.com" className="text-white">
            lucaspavanellinreis@gmail.com
          </a>
        </motion.p>
      </div>
      <motion.div
        initial={initial}
        whileInView={{ ...inView, transition: { ...transition, delay: 0.2 } }}
        viewport={{ once: true }}
      >
        <ContactForm />
      </motion.div>
    </main>
  );
}
