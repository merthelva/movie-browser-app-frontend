import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import * as S from "./styles";
import formFields from "./util";
import { IFieldSetterMap } from "./props.interface";

import { useAppDispatch, useAppSelector } from "hooks";
import { Button, Input, Spinner, Text } from "components";
import {
  AuthMode,
  ButtonSize,
  ButtonType,
  Colors,
  InputFields,
  InputSize,
  InputType,
  Status,
} from "lib/constants";
import { UserActions } from "store/slices/user";
import { UserSelectors } from "store/slices/user";

const AuthPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const status = useAppSelector(UserSelectors.makeSelectUserStatus);

  // Here, instead of keeping each state in its respective "useState" call,
  // "useReducer" hook could be used, but it would complicate the case to handle
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const fieldSetterMap: IFieldSetterMap = {
    email: setEmail,
    password: setPassword,
    confirmPassword: setConfirmPassword,
  };

  const [errorMessages, setErrorMessages] = useState({
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const [authMode, setAuthMode] = useState(AuthMode.SIGNUP);

  const handleInputValueChange = (event: React.FormEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    fieldSetterMap[name](value);
  };

  const handleClearInputValue = (id: string) => fieldSetterMap[id]("");

  const handleSwitchAuthMode = (event: React.FormEvent) => {
    event.preventDefault();
    setAuthMode((prevState: AuthMode) => {
      if (prevState === AuthMode.SIGNUP) {
        router.replace("/auth", "/auth/login");
        return AuthMode.LOGIN;
      }
      router.replace("/auth", "/auth/signup");
      return AuthMode.SIGNUP;
    });
  };

  const handleAuthFormSubmit = async (event: React.FormEvent) => {
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

    /* try {
      // TODO: Create a dedicated axios instance for making auth related API requests.
      const axios = await (await import("axios")).default;

      const { data }: any = await axios.post(
        "http://localhost:4000/auth/login",
        {
          email,
          password,
          //confirmPassword,
        }
      );

      //router.push("/");
      console.log(data);
    } catch (error: any) {
      const errors = error.response.data.reason;

      // TODO: for "login" request, the following line throws an error as there is no errors[index]["confirmPassword"] value due to the reason that login action does not take "confirmPassword" argument
      Object.keys(formFields).forEach((field: any, index: number) => {
        setErrorMessages((prevState) => {
          return {
            ...prevState,
            [field]: errors[index][field].message,
          };
        });
      });
    } */
  };

  useEffect(() => {
    if (status === Status.LOADED) {
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <S.FormWrapper isLoading={status === Status.LOADING}>
      <Input
        id="email"
        errorMsg={errorMessages.email}
        hasClear={email !== ""}
        onClearInput={handleClearInputValue}
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
        errorMsg={errorMessages.password}
        hasClear={password !== ""}
        onClearInput={handleClearInputValue}
        label="Password"
        onChange={handleInputValueChange}
        size={InputSize.MEDIUM}
        type={InputType.PASSWORD}
        value={password}
      />
      {authMode === AuthMode.SIGNUP && (
        <Input
          id="confirmPassword"
          errorMsg={errorMessages.confirmPassword}
          hasClear={confirmPassword !== ""}
          onClearInput={handleClearInputValue}
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
        {status === Status.LOADING && <Spinner size={16} color={Colors.DARK} />}
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
  );
};

export default AuthPage;
