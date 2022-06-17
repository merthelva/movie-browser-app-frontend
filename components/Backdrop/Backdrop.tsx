import { createPortal } from "react-dom";

import * as S from "./styles";
import { IProps } from "./props.interface";

import { BackdropType } from "lib/constants";

const Backdrop: React.FC<IProps> = ({
  isOpen,
  onDismiss,
  type = BackdropType.TRANSPARENT,
}) => {
  if (typeof window === "undefined") return null;

  const backdropSlot = document.querySelector("#backdrop")!;

  const backdropEl = isOpen ? (
    <S.Backdrop
      aria-label="Backdrop"
      onClick={onDismiss}
      role="presentation"
      tabIndex={-1}
      type={type}
    />
  ) : null;

  return createPortal(backdropEl, backdropSlot);
};

export default Backdrop;
