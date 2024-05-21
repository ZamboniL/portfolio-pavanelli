import { AssetDetails } from 'src/types/project';
import Image from './Image';

interface AssetProps {
  id: string;
  list: AssetDetails[];
  isNextAsset?: boolean;
}

export default function Asset({ id, list, isNextAsset }: AssetProps) {
  const asset = list.find((item) => item.sys.id === id);

  if (!asset) return <></>;

  const url = asset.fields.file.url.replace('//', 'https://') || '';
  const type = asset.fields.file.contentType;

  if (type === 'video/mp4') {
    return (
      <div className="flex md:relative md:w-full md:justify-center">
        <video style={{ width: '100%' }} controls src={url} />
      </div>
    );
  }
  const height = asset.fields.file.details.image?.height || 0;
  const width = asset.fields.file.details.image?.width || 0;
  const tags = asset.metadata.tags;
  const tagArray = tags.map(({ sys }) => sys.id);

  const isMobile = tagArray.includes('mobile');
  const isDesktop = tagArray.includes('desktop');
  // const isFootnote = tagArray.includes('footnote');

  const containerClasses = `flex md:relative md:w-full md:justify-center ${
    isNextAsset ? 'mt-16 -mb-12' : 'my-16'
  } ${isMobile ? 'flex md:hidden' : ''} ${isDesktop ? 'hidden md:flex' : ''}`;

  return (
    <div className={containerClasses}>
      <Image width={width} height={height} src={url} alt={asset?.fields.title} />
    </div>
  );
}
