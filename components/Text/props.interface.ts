import { ReactNode } from "react";

import { TextType } from "lib/constants";

export interface IProps {
  children: ReactNode;
  kind?: TextType;
}
