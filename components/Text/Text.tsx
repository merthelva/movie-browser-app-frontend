import * as S from "./styles";
import { IProps } from "./props.interface";

import { TextType } from "lib/constants";

const Text: React.FC<IProps> = ({ children, kind }) => {
  const TextCmp = S[kind || TextType.TEXT];

  return <TextCmp>{children}</TextCmp>;
};

export default Text;
