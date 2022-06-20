import * as S from "./styles";
import { IProps } from "./props.interface";

import Icon from "../Icon";
import Button from "../Button";

import { useImageGallery } from "hooks";
import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const ImageGallery: React.FC<IProps> = ({ imageSources }) => {
  // FIXME: since "placeholder" and "blurDataUrl" props for next/image component are not working as
  // expected here, between image transitions in ImageGallery component, there occurs an empty space
  // and it is quite bad in terms of UX. Unfortunately, this problem can not be solved for the time
  // being, however as soon as a proper solution is found, it will be implemented as required.
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
              /* placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" */
              src={`https://image.tmdb.org/t/p/original/${imageSources[imageIndex]}`}
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
