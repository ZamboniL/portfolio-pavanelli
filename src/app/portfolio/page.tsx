import Card from "src/components/Card";
import DreamProject from "src/components/DreamProject";

export default function Portfolio() {
  return (
    <main className="flex flex-col text-white px-5 md:px-0 md:pt-20">
      <div className="py-24 flex flex-col gap-12 items-center">
        <h2 className="text-[32px] leading-[41px] font-semibold md:text-[64px] md:leading-[74px]">
          Portfolio showcase
        </h2>
        <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-5 max-w-8xl">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <DreamProject />
    </main>
  );
}
