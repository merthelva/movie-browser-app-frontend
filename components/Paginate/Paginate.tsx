import * as S from "./styles";
import { IProps } from "./props.interface";

import Icon from "../Icon";
import Text from "../Text";
import Button from "../Button";

import { useAppDispatch } from "hooks";
import { MoviesActions } from "store/slices/movies";
import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const Paginate: React.FC<IProps> = ({ currentPage }) => {
  const dispatch = useAppDispatch();

  const handleGoToNextPage = () => dispatch(MoviesActions.goToNextPage());
  const handleGoToPrevPage = () => dispatch(MoviesActions.goToPrevPage());

  return (
    <S.Paginate>
      <Button
        disabled={currentPage === 1}
        kind={ButtonType.GHOST}
        onClick={handleGoToPrevPage}
        size={ButtonSize.NOSPACE}
      >
        <S.ButtonWrapper>
          <Icon name={SvgIcon.ANGLE_LEFT} color={Colors.PRIMARY} />
          <Text>Prev</Text>
        </S.ButtonWrapper>
      </Button>

      <Text>{currentPage}</Text>

      <Button
        kind={ButtonType.GHOST}
        onClick={handleGoToNextPage}
        size={ButtonSize.NOSPACE}
      >
        <S.ButtonWrapper>
          <Text>Next</Text>
          <Icon name={SvgIcon.ANGLE_RIGHT} color={Colors.PRIMARY} />
        </S.ButtonWrapper>
      </Button>
    </S.Paginate>
  );
};

export default Paginate;
