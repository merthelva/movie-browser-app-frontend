/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import * as S from "./styles";
import { IFieldSetterMap } from "./props.interface";

import { useAppDispatch, useAppSelector, useIsMounted } from "hooks";
import { Button, Input, Notification, Spinner, Text } from "components";
import {
  AuthMode,
  ButtonSize,
  ButtonType,
  Colors,
  FormFields,
  InputSize,
  InputType,
  Status,
} from "lib/constants";
import { UserActions, UserSelectors } from "store/slices/user";

const AuthPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userId = useAppSelector(UserSelectors.makeSelectUserId);
  const token = useAppSelector(UserSelectors.makeSelectUserToken);
  const status = useAppSelector(UserSelectors.makeSelectUserStatus);
  const errors = useAppSelector(UserSelectors.makeSelectUserError);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [doesFormSubmitAttempt, setDoesFormSubmitAttempt] =
    useState<boolean>(false);
  const [authMode, setAuthMode] = useState<AuthMode>(AuthMode.SIGNUP);

  const isMounted = useIsMounted();

  const fieldSetterMap: IFieldSetterMap = useMemo(() => {
    return {
      email: setEmail,
      password: setPassword,
      confirmPassword: setConfirmPassword,
    };
  }, []);

  const isNotificationOpen = useMemo(() => {
    return doesFormSubmitAttempt && errors && Object.keys(errors).length > 0;
  }, [doesFormSubmitAttempt, errors]);

  const handleInputValueChange = useCallback((event: React.FormEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    fieldSetterMap[name](value);
  }, []);

  const handleClearInputValue = useCallback(
    (id: string) => fieldSetterMap[id](""),
    []
  );

  const handleSwitchAuthMode = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    setAuthMode((prevState: AuthMode) => {
      if (prevState === AuthMode.SIGNUP) {
        router.replace("/auth");
        return AuthMode.LOGIN;
      }
      router.replace("/auth");
      return AuthMode.SIGNUP;
    });
  }, []);

  const handleAuthFormSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      if (authMode === AuthMode.LOGIN) {
        dispatch(
          UserActions.loginRequest({
            email,
            password,
          })
        );
      } else {
        dispatch(
          UserActions.signupRequest({
            email,
            password,
            confirmPassword,
          })
        );
      }
      setDoesFormSubmitAttempt(true);
    },
    [authMode, email, confirmPassword, password]
  );

  useEffect(() => {
    if (userId || token) {
      router.replace("/");
    }
  }, [token, userId]);

  // the following check is placed here and in /movies/:id page for the following reason:
  // since <Notification /> component is used and it is rendered conditionally, whenever
  // reloading the page, an error is thrown stating that "Hydration failed due to rendered
  // initial UI does not match with the one in server." With the following, we force the
  // pages to not render anything unless they are mounted. Still, a more clever solution may
  // be found to solve this mismatched UIs in server and in client problem in the future.
  if (!isMounted) return null;

  return (
    <>
      <Notification
        isOpen={isNotificationOpen}
        notificationText="One or more form fields are invalid. Please check them again."
      />
      <S.FormWrapper isLoading={status === Status.LOADING}>
        <Input
          id="email"
          errorMsg={errors?.[FormFields.EMAIL]?.message}
          hasClear={email !== ""}
          handleClearInput={handleClearInputValue}
          //isAutoFocused
          label="Email"
          onChange={handleInputValueChange}
          placeholder="john@doe.com"
          size={InputSize.MEDIUM}
          type={InputType.EMAIL}
          value={email}
        />
        <Input
          id="password"
          errorMsg={errors?.[FormFields.PASSWORD]?.message}
          hasClear={password !== ""}
          handleClearInput={handleClearInputValue}
          label="Password"
          onChange={handleInputValueChange}
          size={InputSize.MEDIUM}
          type={InputType.PASSWORD}
          value={password}
        />
        {authMode === AuthMode.SIGNUP && (
          <Input
            id="confirmPassword"
            errorMsg={errors?.[FormFields.CONFIRM_PASSWORD]?.message}
            hasClear={confirmPassword !== ""}
            handleClearInput={handleClearInputValue}
            label="Confirm Password"
            onChange={handleInputValueChange}
            size={InputSize.MEDIUM}
            type={InputType.PASSWORD}
            value={confirmPassword}
          />
        )}
        <Button
          kind={ButtonType.PRIMARY}
          size={ButtonSize.MEDIUM}
          onClick={handleAuthFormSubmit}
        >
          {status === Status.LOADING && (
            <Spinner size={16} color={Colors.DARK} />
          )}
          <Text>{authMode === AuthMode.SIGNUP ? "SIGNUP" : "LOGIN"}</Text>
        </Button>
        <S.SwitchModeWrapper>
          <Text>Already have an account? </Text>
          <Button
            kind={ButtonType.GHOST}
            size={ButtonSize.NOSPACE}
            onClick={handleSwitchAuthMode}
          >
            <Text>{authMode === AuthMode.SIGNUP ? "Login" : "Signup"}</Text>
          </Button>
        </S.SwitchModeWrapper>
      </S.FormWrapper>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      meta: {
        title: "Movie Browser App",
        description: "Authentication form for user to authenticate",
      },
    },
  };
};

export default AuthPage;
