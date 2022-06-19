import Image from "next/image";
import styled, { css } from "styled-components";

import { IImageWrapper } from "./props.interface";

import * as ButtonStyles from "../Button/styles";

import { Breakpoints } from "lib/constants";

const pseudoStyle = css`
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  width: min(12%, 36px);
  background-color: transparent;
  transition: background-color 0.5s;
`;

const ImageGallery = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 180px;

  @media (min-width: ${Breakpoints.MOBILE.MIN + 45}px) {
    height: 240px;
  }

  @media (min-width: ${Breakpoints.MOBILE.MAX}px) {
    height: 280px;
  }

  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    height: 350px;
  }

  @media (min-width: ${Breakpoints.TABLET.MIN + 20}px) {
    height: 460px;
  }

  &::before {
    ${pseudoStyle};
    left: 0;
  }

  &::after {
    ${pseudoStyle};
    right: 0;
  }

  &:hover::before,
  &:hover::after {
    background-color: #00000070;
  }

  & > ${ButtonStyles.Button} {
    position: relative;
    z-index: 2;
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.45);
    }
  }
`;

const GallerySlider = styled.div`
  display: flex;
  overflow: hidden;
  position: absolute;
  inset: 0;
`;

const ImageWrapper = styled.figure<IImageWrapper>`
  position: relative;
  z-index: -1;
  transition: transform 0.5s;
  transform: ${({ index }) => `translateX(calc(-${index} * 100%))`};
  min-width: 100%;

  @supports (inset: 0) {
    inset: 0;
  }

  @supports not (inset: 0) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const GalleryImage = styled(Image)`
  object-fit: cover;
  object-position: 80% center;
  min-width: 100%;
  height: 100%;

  @media (min-width: ${Breakpoints.CELL.MIN}px) and (min-width: ${Breakpoints
      .MOBILE.MAX}px) {
    object-position: 50% center;
  }
`;

export { ImageGallery, GallerySlider, ImageWrapper, GalleryImage };
