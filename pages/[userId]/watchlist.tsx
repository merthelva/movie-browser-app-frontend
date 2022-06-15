import { NextPage } from "next";

import * as S from "./styles";

import { useAppSelector } from "hooks";
import { Colors, SvgIcon } from "lib/constants";
import { wrapper, END, ISagaStore } from "store";
import { Icon, Text, WatchlistMovie } from "components";
import { IWatchlistMovie, UserActions, UserSelectors } from "store/slices/user";

const UserWatchlistPage: NextPage = () => {
  const watchlist = useAppSelector(UserSelectors.makeSelectUserWatchlist);
  // TODO: Display different content when no movie is in the watchlist

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

  const renderNoMovieContainer = (
    <S.NoMovieContainer>
      <Icon name={SvgIcon.WARNING} color={Colors.WARNING} size={24} />
      <Text>No movie is available in user watchlist</Text>
    </S.NoMovieContainer>
  );

  return watchlist.length > 0 ? renderPageContent : renderNoMovieContainer;
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
        props: {},
      };
    }
);

export default UserWatchlistPage;
