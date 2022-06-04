import * as S from "./styles";

import { ITextCmp } from "./props.interface";
import { TextType } from "lib/constants";

const Text: React.FC<ITextCmp> = ({ children, kind }) => {
  const TextCmp = S[kind || TextType.TEXT];

  return <TextCmp>{children}</TextCmp>;
};

export default Text;
