import * as S from "./styles";

import { IButtonProps } from "./props.interface";

const Button: React.FC<IButtonProps> = ({
  children,
  disabled,
  kind,
  onClick,
  size,
}) => {
  return (
    <S.Wrapper disabled={disabled} kind={kind} onClick={onClick} size={size}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
