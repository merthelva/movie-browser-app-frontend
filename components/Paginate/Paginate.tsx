import { useMemo } from "react";

import * as S from "./styles";
import { IProps } from "./props.interface";

import Icon from "../Icon";
import Text from "../Text";
import Button from "../Button";

import { useAppDispatch } from "hooks";
import { MoviesActions } from "store/slices/movies";
import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const paginationStart = [1, 2, 3, 4, 5, 6];

const Paginate: React.FC<IProps> = ({ currentPage, totalPages }) => {
  const dispatch = useAppDispatch();
  const paginationEnd = useMemo(() => {
    return [
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }, [totalPages]);

  const handleGoToNextPage = () => dispatch(MoviesActions.goToNextPage());
  const handleGoToPrevPage = () => dispatch(MoviesActions.goToPrevPage());
  const handleGoToSelectedPage = (page: number) =>
    dispatch(MoviesActions.goToSelectedPage(page));

  let paginationContent = (
    <>
      {paginationStart.slice(0, 3).map((page) => (
        <Button
          key={page}
          kind={ButtonType.GHOST}
          onClick={handleGoToSelectedPage.bind(this, page)}
          size={ButtonSize.NOSPACE}
        >
          <S.PageNumberText isActive={currentPage === page}>
            {page}
          </S.PageNumberText>
        </Button>
      ))}
      <Text>...</Text>
      {paginationEnd.slice(2, paginationEnd.length).map((page) => (
        <Button
          key={page}
          kind={ButtonType.GHOST}
          onClick={handleGoToSelectedPage.bind(this, page)}
          size={ButtonSize.NOSPACE}
        >
          <S.PageNumberText isActive={currentPage === page}>
            {page}
          </S.PageNumberText>
        </Button>
      ))}
    </>
  );

  if (currentPage >= 4 && currentPage <= 6) {
    paginationContent = (
      <>
        {paginationStart.map((page) => (
          <Button
            key={page}
            kind={ButtonType.GHOST}
            onClick={handleGoToSelectedPage.bind(this, page)}
            size={ButtonSize.NOSPACE}
          >
            <S.PageNumberText isActive={currentPage === page}>
              {page}
            </S.PageNumberText>
          </Button>
        ))}
        <Text>...</Text>
        {paginationEnd.slice(2, paginationEnd.length).map((page) => (
          <Button
            key={page}
            kind={ButtonType.GHOST}
            onClick={handleGoToSelectedPage.bind(this, page)}
            size={ButtonSize.NOSPACE}
          >
            <S.PageNumberText isActive={currentPage === page}>
              {page}
            </S.PageNumberText>
          </Button>
        ))}
      </>
    );
  } else if (currentPage >= 7 && currentPage <= totalPages - 5) {
    const paginationMiddle = [currentPage - 1, currentPage, currentPage + 1];

    paginationContent = (
      <>
        {paginationStart.slice(0, 3).map((page) => (
          <Button
            key={page}
            kind={ButtonType.GHOST}
            onClick={handleGoToSelectedPage.bind(this, page)}
            size={ButtonSize.NOSPACE}
          >
            <S.PageNumberText isActive={currentPage === page}>
              {page}
            </S.PageNumberText>
          </Button>
        ))}
        <Text>...</Text>
        {paginationMiddle.map((page) => (
          <Button
            key={page}
            kind={ButtonType.GHOST}
            onClick={handleGoToSelectedPage.bind(this, page)}
            size={ButtonSize.NOSPACE}
          >
            <S.PageNumberText isActive={currentPage === page}>
              {page}
            </S.PageNumberText>
          </Button>
        ))}
        <Text>...</Text>
        {paginationEnd.slice(2, paginationEnd.length).map((page) => (
          <Button
            key={page}
            kind={ButtonType.GHOST}
            onClick={handleGoToSelectedPage.bind(this, page)}
            size={ButtonSize.NOSPACE}
          >
            <S.PageNumberText isActive={currentPage === page}>
              {page}
            </S.PageNumberText>
          </Button>
        ))}
      </>
    );
  } else if (currentPage >= totalPages - 4 && currentPage <= totalPages) {
    paginationContent = (
      <>
        {paginationStart.slice(0, 3).map((page) => (
          <Button
            key={page}
            kind={ButtonType.GHOST}
            onClick={handleGoToSelectedPage.bind(this, page)}
            size={ButtonSize.NOSPACE}
          >
            <S.PageNumberText isActive={currentPage === page}>
              {page}
            </S.PageNumberText>
          </Button>
        ))}
        <Text>...</Text>
        {paginationEnd.map((page) => (
          <Button
            key={page}
            kind={ButtonType.GHOST}
            onClick={handleGoToSelectedPage.bind(this, page)}
            size={ButtonSize.NOSPACE}
          >
            <S.PageNumberText isActive={currentPage === page}>
              {page}
            </S.PageNumberText>
          </Button>
        ))}
      </>
    );
  }

  return (
    <S.Wrapper>
      <Button
        aria-label="Previous page"
        disabled={currentPage === 1}
        kind={ButtonType.GHOST}
        onClick={handleGoToPrevPage}
        size={ButtonSize.NOSPACE}
      >
        <Icon name={SvgIcon.ANGLE_LEFT} color={Colors.PRIMARY} />
      </Button>
      <S.Pagination>{paginationContent}</S.Pagination>
      <Button
        aria-label="Next page"
        disabled={currentPage === 1}
        kind={ButtonType.GHOST}
        onClick={handleGoToNextPage}
        size={ButtonSize.NOSPACE}
      >
        <Icon name={SvgIcon.ANGLE_RIGHT} color={Colors.PRIMARY} />
      </Button>
    </S.Wrapper>
  );
};

export default Paginate;
