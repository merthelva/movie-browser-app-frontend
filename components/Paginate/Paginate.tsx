import * as S from "./styles";

import { IPaginateProps } from "./props.interface";

import Button from "../Button";
import Icon from "../Icon";
import Text from "../Text";

import { useAppDispatch, useAppSelector } from "hooks";
import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";
import { MoviesActions } from "store/slices/movies";

const Paginate: React.FC<IPaginateProps> = ({ currentPage }) => {
  const dispatch = useAppDispatch();

  const handleGoToNextPage = () => dispatch(MoviesActions.goToNextPage());
  const handleGoToPrevPage = () => dispatch(MoviesActions.goToPrevPage());

  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
};

export default Paginate;
