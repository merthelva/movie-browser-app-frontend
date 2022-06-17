import Image from "next/image";

import * as S from "./styles";
import { IProps } from "./props.interface";

import Text from "../Text";

const CharacterDetail: React.FC<IProps> = ({ avatarSrc, character, name }) => {
  return (
    <S.CharacterDetail>
      <S.ImageWrapper>
        <Image
          alt={name}
          width={150}
          height={225}
          objectFit="cover"
          src={`https://image.tmdb.org/t/p/w185/${avatarSrc}`}
        />
      </S.ImageWrapper>
      <S.Details>
        <Text>{name}</Text>
        <Text>{character}</Text>
      </S.Details>
    </S.CharacterDetail>
  );
};

export default CharacterDetail;
