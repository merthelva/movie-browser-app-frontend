import * as S from "./styles";
import { IProps, IActionItem } from "./props.interface";

import Icon from "../Icon";
import Text from "../Text";
import Button from "../Button";
import Spinner from "../Spinner";
import Backdrop from "../Backdrop";

import { BackdropType, ButtonSize, ButtonType, Colors } from "lib/constants";

const ActionsMenu: React.FC<IProps> = ({
  actionHandlers,
  actionItems,
  isActive = false,
  isProcessing = false,
  onClose,
}) => {
  return (
    <>
      <Backdrop
        isOpen={isActive}
        onDismiss={onClose}
        type={BackdropType.INVISIBLE}
      />
      <S.ActionsMenu isActive={isActive}>
        {actionItems.map((action: IActionItem, index: number) => (
          <S.ActionItemWrapper key={action.id}>
            <Button
              kind={ButtonType.GHOST}
              size={ButtonSize.NOSPACE}
              onClick={actionHandlers[index]}
            >
              {isProcessing ? (
                <Spinner color={Colors.DARK} size={16} thickness={3} />
              ) : (
                <Icon name={action.icon} color={action.color} size={16} />
              )}
              <Text>{action.name}</Text>
            </Button>
          </S.ActionItemWrapper>
        ))}
      </S.ActionsMenu>
    </>
  );
};

export default ActionsMenu;
