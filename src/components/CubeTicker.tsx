import Ticker from './Ticker';

const cubes = [
  'figma',
  'photoshop',
  'illustrator',
  'xd',
  'premier',
  'after',
  'indesign',
  'jira',
  'monday',
  'vscode',
  'next',
  'react',
  'framer',
  'hotjar',
  'analytics'
];

export default function CubeTicker() {
  return (
    <div>
      <Ticker
        style={{
          maskImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
        }}
        containerWidth={1360}
        duration={56}
      >
        {cubes.map((c) => (
          <div key={c} className="flex w-[135px] items-center">
            <img src={`/cube/${c}.png`} alt={c} className="size-[35px] max-w-fit" loading="eager" />
          </div>
        ))}
      </Ticker>
    </div>
  );
}
