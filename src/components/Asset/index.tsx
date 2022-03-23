import Image from "next/image";
import styled from "styled-components";
import { AssetDetails } from "../../types/project";

interface AssetProps {
  id: string;
  list: AssetDetails[];
}

const Asset = ({ id, list }: AssetProps) => {
  const asset = list.find((item) => item.sys.id === id);
  const url = asset?.fields.file.url.replace("//", "https://") || "";
  const type = asset?.fields.file.contentType;
  const height = asset?.fields.file.details.image?.height || 0;
  const width = asset?.fields.file.details.image?.width || 0;

  if (type === "video/mp4") {
    return (
      <Container>
        <Banner style={{ background: asset?.fields.description }} />
        <video style={{ width: "100%" }} controls src={url} />
      </Container>
    );
  }
  return (
    <Container>
      <Banner style={{ background: asset?.fields.description }} />
      <Image
        quality={90}
        width={width}
        height={height}
        src={url}
        alt={asset?.fields.title}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 40px 0;
  display: flex;
  justify-content: center;
`;

const Banner = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100vw;
`;

export default Asset;
