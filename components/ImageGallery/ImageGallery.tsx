import * as S from "./styles";
import { IProps } from "./props.interface";

import Icon from "../Icon";
import Button from "../Button";

import { useImageGallery } from "hooks";
import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const ImageGallery: React.FC<IProps> = ({ imageSources }) => {
  // FIXME: since "placeholder" and "blurDataUrl" props for next/image component are not working as
  // expected here, between image transitions in ImageGallery component, there occurs an empty space
  // and it is quite bad in terms of UX. In order to solve this issue temporarily,"loading" property
  // is set to "eager" in Line-... as the last resort, but as documented in the official docs, "eager"
  // value disables the lazy loading of images and this increases the bandwidth unnecessarily. However,
  // as soon as a more proper solution is found, it will be implemented as required.
  const [imageIndex, toPrevImage, toNextImage] = useImageGallery(imageSources);

  return (
    <S.ImageGallery>
      <Button
        kind={ButtonType.GHOST}
        size={ButtonSize.NOSPACE}
        onClick={toPrevImage}
      >
        <Icon color={Colors.PRIMARY} name={SvgIcon.ANGLE_LEFT} size={32} />
      </Button>
      <S.GallerySlider>
        {imageSources.map((src) => (
          <S.ImageWrapper key={src} index={imageIndex}>
            <S.GalleryImage
              alt={src}
              layout="fill"
              src={`https://image.tmdb.org/t/p/original/${imageSources[imageIndex]}`}
              loading="eager"
            />
          </S.ImageWrapper>
        ))}
      </S.GallerySlider>
      <Button
        kind={ButtonType.GHOST}
        size={ButtonSize.NOSPACE}
        onClick={toNextImage}
      >
        <Icon color={Colors.PRIMARY} name={SvgIcon.ANGLE_RIGHT} size={32} />
      </Button>
    </S.ImageGallery>
  );
};

export default ImageGallery;
