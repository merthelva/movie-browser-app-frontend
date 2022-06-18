import * as S from "./styles";
import { IProps } from "./props.interface";

import Icon from "../Icon";
import Button from "../Button";

import { useImageGallery } from "hooks";
import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const ImageGallery: React.FC<IProps> = ({ imageSources }) => {
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
      <S.ImageWrapper>
        <S.GalleryImage
          alt=""
          layout="fill"
          src={`https://image.tmdb.org/t/p/original/${imageSources[imageIndex]}`}
        />
      </S.ImageWrapper>
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
