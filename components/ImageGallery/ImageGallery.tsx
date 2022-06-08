import Image from "next/image";

import * as S from "./styles";

import Button from "../Button";
import Icon from "../Icon";

import { IProps } from "./props.interface";

import { useImageGallery } from "hooks";
import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const dummyImageGallery = ["1", "2", "3", "4", "5"];

const ImageGallery: React.FC<IProps> = ({ images }) => {
  const [imageIndex, handleMoveToPrevImage, handleMoveToNextImage] =
    useImageGallery(dummyImageGallery);

  return (
    <S.Wrapper>
      <Button
        kind={ButtonType.GHOST}
        size={ButtonSize.NOSPACE}
        onClick={handleMoveToPrevImage}
      >
        <Icon name={SvgIcon.ANGLE_LEFT} color={Colors.PRIMARY} size={40} />
      </Button>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          maxWidth: "768px",
        }}
      >
        <S.DisplayedImage>
          <Image
            alt=""
            layout="fill"
            sizes="90%"
            objectFit="cover"
            src={`https://image.tmdb.org/t/p/original/${images[imageIndex]}`}
          />
        </S.DisplayedImage>
      </div>
      <Button
        kind={ButtonType.GHOST}
        size={ButtonSize.NOSPACE}
        onClick={handleMoveToNextImage}
      >
        <Icon name={SvgIcon.ANGLE_RIGHT} color={Colors.PRIMARY} size={40} />
      </Button>
    </S.Wrapper>
  );
};

export default ImageGallery;
