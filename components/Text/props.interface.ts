import { ReactNode } from "react";

import { TextType } from "lib/constants";

export interface ITextCmp {
  children: ReactNode;
  kind?: TextType;
}
