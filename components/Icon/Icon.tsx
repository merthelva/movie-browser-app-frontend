import * as S from "./styles";

import icons from "./icons";
import { IIconProps } from "./props.interface";

import { IconSize } from "lib/constants";

const Icon: React.FC<IIconProps> = ({
  name,
  format = IconSize.LARGE,
  isSpinning = false,
  ...props
}) => {
  const iconProps = { name, isSpinning, ...props };
  const wrapperProps = { ...props, format };

  return (
    <S.Wrapper {...wrapperProps}>
      <S.Svg viewBox={icons[name].viewBox} {...iconProps}>
        <S.Path d={icons[name].path} />
      </S.Svg>
    </S.Wrapper>
  );
};

export default Icon;
