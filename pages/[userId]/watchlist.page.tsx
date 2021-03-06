import { NextPage } from "next";

import * as S from "./styles";
import { IProps } from "./props.interface";

import { useAppSelector } from "hooks";
import { Colors, SvgIcon } from "lib/constants";
import { wrapper, END, ISagaStore } from "store";
import { Icon, SEOHead, Text, WatchlistMovie } from "components";
import { IWatchlistMovie, UserActions, UserSelectors } from "store/slices/user";

const UserWatchlistPage: NextPage<IProps> = ({ meta }) => {
  const watchlist = useAppSelector(UserSelectors.makeSelectUserWatchlist);

  const renderPageContent = (
    <S.Wrapper>
      {watchlist.map((movie: IWatchlistMovie) => (
        <WatchlistMovie
          key={movie.id}
          id={movie.id}
          budget={movie.budget}
          releaseDate={movie.releaseDate}
          duration={movie.duration}
          title={movie.title}
        />
      ))}
    </S.Wrapper>
  );

  const renderNoMovieContent = (
    <S.NoMovieContainer>
      <Icon name={SvgIcon.WARNING} color={Colors.WARNING} size={24} />
      <Text>No movie is available in user watchlist</Text>
    </S.NoMovieContainer>
  );

  return (
    <>
      <SEOHead metaProps={{ ...meta }}>
        <meta name="robots" content="noindex" />
      </SEOHead>
      {watchlist.length > 0 ? renderPageContent : renderNoMovieContent}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const userId = params!.userId as string;
      store.getState().user.isAuthenticated &&
        store.dispatch(UserActions.fetchWatchlistRequest(userId));

      store.dispatch(END);
      await (store as ISagaStore).sagaTask!.toPromise();

      return {
        props: {
          meta: {
            title: `Watchlist`,
            description: `Watchlist page for user with userId ${userId}`,
          },
        },
      };
    }
);

export default UserWatchlistPage;
