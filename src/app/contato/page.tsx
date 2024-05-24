import ContactForm from 'src/components/ContactForm';

export default function Contact() {
  return (
    <main className="flex max-w-3xl flex-col px-5 text-white md:pt-20  2xl:px-0">
      <div className="flex flex-col gap-8 py-24 md:items-center md:gap-6">
        <h2 className="text-[32px] font-semibold leading-[41px] md:text-[64px] md:leading-[74px]">
          Vamos trabalhar juntos.
        </h2>
        <p className="font-medium text-white/50 md:text-center">
          Adoraria saber mais sobre seu projeto e como posso ajudá-lo. Sinta-se à vontade para
          compartilhar todos os detalhes usando o formulário abaixo. Se preferir enviar um e-mail,
          você pode entrar em contato comigo em
          <a href="mailto:aalayrasoolmowlana@gmail.com" className="text-white">
            lucaspavanellinreis@gmail.com
          </a>
        </p>
      </div>
      <ContactForm />
    </main>
  );
}
