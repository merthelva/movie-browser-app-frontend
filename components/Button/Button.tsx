import * as S from "./styles";
import { IProps } from "./props.interface";

const Button: React.FC<IProps> = ({
  children,
  className,
  disabled,
  kind,
  onClick,
  size,
}) => {
  // className prop is passed to the component so that it can be extended in
  // another style file using "styled" API and overwriting the base styles
  // please refer to https://styled-components.com/docs/basics#styling-any-component
  return (
    <S.Button
      className={className}
      disabled={disabled}
      kind={kind}
      onClick={onClick}
      size={size}
    >
      {children}
    </S.Button>
  );
};

export default Button;
