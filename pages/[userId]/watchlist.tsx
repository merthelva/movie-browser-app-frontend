import { NextPage } from "next";

import * as S from "./styles";

import { useAppSelector } from "hooks";
import { Status } from "lib/constants";
import { wrapper, END, ISagaStore } from "store";
import { UserActions, UserSelectors } from "store/slices/user";

const UserWatchlistPage: NextPage = () => {
  const watchlist = useAppSelector(UserSelectors.makeSelectUserWatchlist);
  const status = useAppSelector(UserSelectors.makeSelectUserStatus);

  return <S.Wrapper>User watchlist page</S.Wrapper>;
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
