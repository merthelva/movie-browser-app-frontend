import * as S from "./styles";

import { IButtonProps } from "./props.interface";

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  disabled,
  kind,
  onClick,
  size,
}) => {
  return (
    <S.Wrapper
      className={className}
      disabled={disabled}
      kind={kind}
      onClick={onClick}
      size={size}
    >
      {children}
    </S.Wrapper>
  );
};

export default Button;
