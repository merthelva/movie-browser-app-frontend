import { createPortal } from "react-dom";

import * as S from "./styles";
import { IBackdropProps } from "./props.interface";

import { BackdropType } from "lib/constants";

const Backdrop: React.FC<IBackdropProps> = ({
  isOpen,
  onDismiss,
  type = BackdropType.TRANSPARENT,
}) => {
  if (typeof window === "undefined") return null;

  const backdropSlot = document.querySelector("#backdrop")!;

  const backdropEl = isOpen ? (
    <S.Wrapper
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
