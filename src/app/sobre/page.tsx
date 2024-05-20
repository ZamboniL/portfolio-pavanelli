import DreamProject from 'src/components/DreamProject';
import Experience from 'src/components/Experience';
import Service from 'src/components/Service';
import Statistics from 'src/components/Statistics';

export default function About() {
  return (
    <main className="flex flex-col items-center px-5 pt-14 tracking-tighter text-white md:pt-20 2xl:px-0">
      <div className="flex max-w-8xl flex-col items-center gap-12 pt-12 md:gap-14 md:pt-24">
        <h2 className="text-[32px] font-semibold leading-[32px] md:text-[64px] md:leading-[74px]">
          About Daniel Bennett
        </h2>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <img
            src="/about-example.png"
            alt=""
            className="rounded-[20px] object-cover md:h-[400px] md:w-[350px] md:flex-[0_0_auto]"
          />
          <div className="flex flex-col gap-7 leading-7 text-white/50 md:w-3/5">
            <p>
              Meet Daniel Bennett, the Creative Mind Behind the Designs In the ever-evolving
              landscape of design and technology, Daniel Bennett stands as a passionate creative
              force, breathing life into digital and visual experiences. With a career spanning over
              a decade, Daniel has not only mastered the art of graphic design and front-end
              development but has also become a visionary storyteller in the world of design.{' '}
            </p>
            <p>
              The Journey of a Young Creative {"Daniel's"} journey into the realm of design began
              with humble origins. From an early age, he displayed an innate talent for drawing and
              an insatiable curiosity for the world of visual art. Armed with sketchbooks and an
              unquenchable thirst for creativity, he embarked on a path that would eventually lead
              him to the intersection of art and technology. As a teenager, Daniel delved into the
              fascinating world of web design. He learned the intricacies of HTML and CSS, and
              before he knew it, he had coded his very first website. It was a moment of epiphany,
              where he realized that he could combine his artistic inclinations with the limitless
              possibilities offered by the digital canvas.
            </p>
          </div>
        </div>
      </div>
      <Statistics />
      <div className="flex max-w-8xl flex-col gap-1 pt-24 md:gap-14">
        <h3 className="text-[32px] font-semibold leading-10 md:text-5xl">Experience</h3>
        <div className="flex flex-col gap-8">
          <Experience />
          <Experience />
          <Experience />
          <Experience />
        </div>
      </div>
      <div className="flex w-full max-w-8xl flex-col gap-12 pt-24 md:gap-14">
        <h3 className="text-[32px] font-semibold leading-10 md:text-5xl">Services</h3>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-5">
          <Service />
          <Service />
          <Service />
        </div>
      </div>
      <div className="flex w-full max-w-8xl flex-col gap-12 py-24 md:gap-14">
        <h3 className="text-[32px] font-semibold leading-10 md:text-5xl">Stacks</h3>
        <div className="flex gap-20 rounded-[20px] bg-primary-900 py-8 text-xl font-semibold text-white/50">
          <img src="/cube/notion.png" alt="" height={35} width={35} />
          <img src="/cube/notion.png" alt="" height={35} width={35} />
          <img src="/cube/notion.png" alt="" height={35} width={35} />
        </div>
      </div>
      <DreamProject />
    </main>
  );
}
