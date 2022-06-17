import { useState } from "react";

import * as S from "./styles";
import { IProps } from "./props.interface";

import Icon from "../Icon";
import Text from "../Text";
import Button from "../Button";
import ActionsMenu from "../ActionsMenu";

import { useAppDispatch, useAppSelector } from "hooks";
import { UserActions, UserSelectors } from "store/slices/user";
import { convertLongNumberToReadableFormat } from "lib/utilities";
import { ButtonSize, ButtonType, Colors, Status, SvgIcon } from "lib/constants";

const actionItems = [
  {
    id: "delete",
    name: "Delete",
    icon: SvgIcon.CANCEL_FILLED,
    color: Colors.ERROR,
  },
];

const WatchlistMovie: React.FC<IProps> = ({
  id,
  budget,
  releaseDate,
  duration,
  title,
}) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(UserSelectors.makeSelectUserId);
  const status = useAppSelector(UserSelectors.makeSelectUserStatus);
  const [isActionsMenuActive, setIsActionsMenuActive] =
    useState<boolean>(false);

  const handleToggleActionsMenu = () =>
    setIsActionsMenuActive((prevState: boolean) => !prevState);

  const handleRemoveMovieFromWatchlist = () => {
    dispatch(UserActions.removeMovieFromWatchlistRequest(id, userId));
  };

  // Do we need performance optimization here?
  const actionHandlers = [handleRemoveMovieFromWatchlist];

  return (
    <S.WatchlistMovie>
      <S.Header>
        <ActionsMenu
          actionHandlers={actionHandlers}
          actionItems={actionItems}
          isActive={isActionsMenuActive}
          isProcessing={status === Status.LOADING}
          onClose={handleToggleActionsMenu}
        />
        <Text>{title}</Text>
        <Button
          kind={ButtonType.GHOST}
          size={ButtonSize.NOSPACE}
          onClick={handleToggleActionsMenu}
        >
          <Icon name={SvgIcon.MENU} color={Colors.SECONDARY} size={20} />
        </Button>
      </S.Header>
      <S.Footer>
        <S.FooterInfo>
          <Icon name={SvgIcon.CLOCK} color={Colors.SECONDARY} size={20} />
          <Text>{releaseDate}</Text>
        </S.FooterInfo>
        <S.FooterInfo>
          <Icon name={SvgIcon.HISTORY} color={Colors.SECONDARY} size={20} />
          <Text>{duration} min.</Text>
        </S.FooterInfo>
        <S.FooterInfo>
          <Icon name={SvgIcon.MONEY} color={Colors.SECONDARY} size={20} />
          <Text>$ {convertLongNumberToReadableFormat(budget, {})}</Text>
        </S.FooterInfo>
      </S.Footer>
    </S.WatchlistMovie>
  );
};

export default WatchlistMovie;
