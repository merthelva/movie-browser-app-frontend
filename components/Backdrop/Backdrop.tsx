import { createPortal } from "react-dom";

import * as S from "./styles";

import { IBackdropProps } from "./props.interface";

const Backdrop: React.FC<IBackdropProps> = ({ isOpen, onDismiss }) => {
  if (typeof window === "undefined") return null;

  const backdropSlot = document.querySelector("#backdrop")!;

  const backdropEl = isOpen ? (
    <S.Backdrop
      aria-label="Backdrop"
      onClick={onDismiss}
      role="presentation"
      tabIndex={-1}
    />
  ) : null;

  return createPortal(backdropEl, backdropSlot);
};

export default Backdrop;
