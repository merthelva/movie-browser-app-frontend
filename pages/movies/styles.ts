import Image from "next/image";
import styled from "styled-components";

import * as ButtonStyles from "components/Button/styles";
import * as TextStyles from "components/Text/styles";

import { getColor } from "lib/utilities";
import { Breakpoints } from "lib/constants";

import { IContentProps } from "./props.interface";

const Wrapper = styled.div`
  max-width: 840px;
  margin: auto;

  @media (min-width: ${Breakpoints.TABLET_MINI
      .MIN}px) and (max-width: ${Breakpoints.TABLET.MIN}px) {
    padding: 0 var(--spacing-32x);
  }
`;

const Details = styled.div`
  overflow: hidden;
  border-radius: 4px;
  background-color: ${getColor("DARK")};
`;

const Body = styled.div`
  padding: var(--spacing-12x);

  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    display: grid;
    grid-template-areas:
      "poster content"
      "poster footer";
    grid-template-columns: 2fr 3fr;
    padding: 0;
  }
`;

const Content = styled.div<IContentProps>`
  grid-area: content;

  & > ${TextStyles.Text} {
    color: ${getColor("LIGHT")};
    font-size: 18px;
    font-weight: var(--fw-thin);
    text-align: left;
    margin-bottom: var(--spacing-12x);
  }

  & > ${ButtonStyles.Button} {
    min-width: 180px;
    margin-bottom: var(--spacing-8x);

    ${TextStyles.Text} {
      margin-left: ${({ isLoading }) => (isLoading ? "var(--spacing-2x)" : 0)};
      font-size: 14px;
    }
  }

  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    padding: var(--spacing-12x);
  }
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-8x);

  & > ${TextStyles.Text} {
    color: ${getColor("PRIMARY")};
    font-weight: var(--fw-bolder);
    font-size: 24px;
    text-align: left;
    line-height: 1.3;
    margin-right: var(--spacing-4x);
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${getColor("DARK")};
  opacity: 0.6;
  margin: 0 calc(-1 * var(--spacing-12x)) calc(-1 * var(--spacing-12x));
  padding: var(--spacing-4x) var(--spacing-12x);

  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    margin: 0;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-4x);

  ${TextStyles.Text} {
    font-size: 14px;
  }
`;

const PosterWrapper = styled.div`
  grid-area: poster;
  margin-bottom: var(--spacing-12x);

  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    padding: var(--spacing-12x) 0;
  }
`;

const Poster = styled(Image)`
  object-position: center;
`;

const Actors = styled.div`
  padding: var(--spacing-12x) var(--spacing-8x);
  background-color: ${getColor("LIGHT")};
`;

const ActorsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-8x);

  & > ${TextStyles.Text} {
    font-size: 24px;
    font-weight: var(--fw-bold);
    font-family: "Acme", sans-serif;
    color: ${getColor("DARK")};
  }
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;

  & > ${TextStyles.Text} {
    color: ${getColor("SECONDARY")};
    font-size: 14px;
    margin-left: var(--spacing-4x);
  }
`;

const CastWrapper = styled.div`
  display: grid;
  gap: var(--spacing-8x);
  justify-items: center;

  @media (min-width: ${Breakpoints.MOBILE.MIN}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 548px) and (max-width: ${Breakpoints.MOBILE.MAX}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 674px) and (max-width: ${Breakpoints.TABLET.MIN}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${Breakpoints.TABLET.MIN + 1}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export {
  Wrapper,
  Details,
  Body,
  Content,
  ContentHeader,
  Footer,
  FooterInfo,
  PosterWrapper,
  Poster,
  Actors,
  ActorsHeader,
  SwitchWrapper,
  CastWrapper,
};
