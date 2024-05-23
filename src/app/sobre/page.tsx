import CubeTicker from 'src/components/CubeTicker';
import DreamProject from 'src/components/DreamProject';
import Experience from 'src/components/Experience';
import Service from 'src/components/Service';

export default function About() {
  return (
    <main className="flex max-w-full flex-col items-center px-5 pt-14 tracking-tighter text-white md:pt-20 2xl:px-0">
      <div className="flex max-w-8xl flex-col items-center gap-12 pt-12 md:gap-14 md:pt-24">
        <h2 className="text-[32px] font-semibold leading-[32px] md:text-[64px] md:leading-[74px]">
          Sobre Lucas Pavanelli
        </h2>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <img
            src="/about.jpeg"
            alt=""
            className="rounded-main object-cover md:h-[400px] md:w-[350px] md:flex-[0_0_auto]"
          />
          <div className="flex flex-col gap-7 leading-7 text-white/50 md:w-3/5">
            <p>
              Olá! Meu nome é Lucas Pavanelli, tenho 24 anos e sou um UX/UI designer apaixonado pela
              minha profissão. Desde que comecei a me aprofundar no mundo do design, descobri uma
              verdadeira paixão por criar experiências digitais que não apenas sejam funcionais, mas
              também encantem os usuários. Cada projeto é uma nova oportunidade de explorar a
              interseção entre estética e usabilidade, buscando sempre soluções inovadoras e
              eficazes.
            </p>
            <p>
              Além do design, outra grande paixão minha é viajar. Adoro explorar novos lugares,
              conhecer diferentes culturas e tirar inspiração das diversas paisagens e estilos de
              vida que encontro pelo mundo. Viajar não apenas amplia meus horizontes pessoais, mas
              também me traz novas perspectivas que aplico em meus projetos, tornando meu trabalho
              mais rico e diversificado.
            </p>
            <p>
              Com uma combinação de criatividade, curiosidade e carinho pelos detalhes, estou sempre
              em busca de novos desafios e oportunidades para crescer como profissional e como
              pessoa.
            </p>
          </div>
        </div>
      </div>
      <div className="flex  w-full max-w-8xl flex-col gap-1 pt-24 md:gap-14">
        <h3 className="text-[32px] font-semibold leading-10 md:text-5xl">Experiência</h3>
        <div className="flex flex-col gap-8">
          <Experience
            period="Out 2022 - Atualmente"
            title="Product Designer Pleno"
            company="Paiper"
            description=""
          />
          <Experience
            period="Abr 2022 - Jul 2022"
            title="Designer Pleno"
            company="Seri.e Design"
            description=""
          />
          <Experience
            period="Ago 2020 - Abr 2022"
            title="Designer Júnior II"
            company="Seri.e Design"
            description=""
          />
          <Experience
            period="Fev 2020 - Ago 2020"
            title="Designer Júnior"
            company="Seri.e Design"
            description=""
          />
          <Experience
            period="Dez 2019 - Fev 2020"
            title="Workplace Services Apprentice"
            company="Salesforce"
            description=""
          />
          <Experience
            period="Mar 2019 - Dez 2019"
            title="Employee Sucess Apprentice"
            company="Salesforce"
            description=""
          />
        </div>
      </div>
      <div className="flex w-full max-w-8xl flex-col gap-12 pt-24 md:gap-14">
        <h3 className="text-[32px] font-semibold leading-10 md:text-5xl">Serviços</h3>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-5">
          <Service tag="01" title="UX/UI Design" />
          <Service tag="02" title="Web Design" />
          <Service tag="03" title="Identidade visual" />
          <Service tag="04" title="Research" />
          <Service tag="05" title="Desenvolvimento Front-End" />
        </div>
      </div>
      <div className="flex w-full max-w-8xl flex-col gap-12 py-24 md:gap-14">
        <h3 className="text-[32px] font-semibold leading-10 md:text-5xl">Stacks</h3>
        <div className="overflow-hidden rounded-main bg-primary-900 py-8 text-xl font-semibold">
          <CubeTicker />
        </div>
      </div>
      <DreamProject />
    </main>
  );
}
