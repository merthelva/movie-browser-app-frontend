import * as S from "./styles";

import { IProps } from "./props.interface";

const Switch: React.FC<IProps> = ({ isToggled, onToggle }) => {
  return (
    <S.Wrapper isToggled={isToggled} onClick={onToggle}>
      <S.Indicator isToggled={isToggled} />
    </S.Wrapper>
  );
};

export default Switch;
