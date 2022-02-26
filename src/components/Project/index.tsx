import styled from "styled-components";
import Link from "next/link";

interface ProjectProps {
  title: string;
  subtitle: string;
  href: string;
  src?: string;
}

const Project = ({ title, subtitle, href, src }: ProjectProps) => {
  if (href.includes("http")) {
    return (
      <Root href={href} target="_blank" rel="noopener noreferrer">
        <Image src={src} height="100%" width="100%" />
        <Title>
          {title}
          <Subtitle> - {subtitle}</Subtitle>
        </Title>
      </Root>
    );
  }
  return (
    <Link href={href}>
      <Root href={href}>
        <Image src={src} height="100%" width="100%" />
        <Title>
          {title}
          <Subtitle> - {subtitle}</Subtitle>
        </Title>
      </Root>
    </Link>
  );
};

const Root = styled.a`
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: background-color 0.3s ease-in-out;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:hover > h2 {
    z-index: 2;
    top: 50%;
  }
`;

const Image = styled.img`
  object-fit: cover;
`;

const Title = styled.h2`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  max-height: 0%;
  color: ${({ theme }) => theme.colors.secondary.main};
  width: 100%;
  text-align: center;
`;

const Subtitle = styled.span`
  color: #fff;
`;

export default Project;
