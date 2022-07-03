import Image from "next/image";
import styled from "styled-components";
import { AssetDetails } from "../../types/project";

interface AssetProps {
  id: string;
  list: AssetDetails[];
}

const Asset = ({ id, list }: AssetProps) => {
  const asset = list.find((item) => item.sys.id === id);

  if (!asset) return <></>;

  const url = asset.fields.file.url.replace("//", "https://") || "";
  const type = asset.fields.file.contentType;

  if (type === "video/mp4") {
    return (
      <Container>
        <Banner style={{ background: asset?.fields.description }} />
        <video style={{ width: "100%" }} controls src={url} />
      </Container>
    );
  }
  const height = asset.fields.file.details.image?.height || 0;
  const width = asset.fields.file.details.image?.width || 0;
  const tags = asset.metadata.tags;
  const tagArray = tags.map(({ sys }) => sys.id);

  const isMobile = tagArray.includes("desktop");
  const isDesktop = tagArray.includes("mobile");
  const isFootnote = tagArray.includes("footnote");

  return (
    <Container
      isMobile={isMobile}
      isDesktop={isDesktop}
      isFootnote={isFootnote}
    >
      <Banner style={{ background: asset?.fields.description }} />
      <ImageContainer>
        <Image
          quality={90}
          width={width}
          height={height}
          src={url}
          alt={asset?.fields.title}
        />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div<{
  isMobile?: boolean;
  isDesktop?: boolean;
  isFootnote?: boolean;
}>`
  position: relative;
  margin: 40px 0;
  display: flex;
  justify-content: center;
  display: ${({ isDesktop }) => (isDesktop ? "none" : "flex")};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
  }

  margin-bottom: ${({isFootnote}) => isFootnote ? '-60px' : ''}
`;

const Banner = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100vw;
`;

const ImageContainer = styled.div`
  position: relative;
  margin: 0 -100vw;
  max-width: 100vw;

  & > div {
    height: 100%;
  }
`;

export default Asset;
