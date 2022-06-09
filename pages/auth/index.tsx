import { NextPage } from "next";

import * as S from "./styles";

import { Button, Input, Text } from "components";
import { ButtonSize, ButtonType, InputSize, InputType } from "lib/constants";

const AuthPage: NextPage = () => {
  return (
    <S.FormWrapper>
      <Input
        id="email"
        //errorMsg="Some error message"
        //hasClear
        label="Email"
        placeholder="john@doe.com"
        size={InputSize.MEDIUM}
        type={InputType.EMAIL}
      />
      <Input
        id="password"
        //errorMsg="Some error message"
        //hasClear
        label="Password"
        size={InputSize.MEDIUM}
        type={InputType.PASSWORD}
      />
      <Button
        kind={ButtonType.PRIMARY}
        size={ButtonSize.MEDIUM}
        onClick={() => {}}
      >
        <Text>LOGIN</Text>
      </Button>
    </S.FormWrapper>
  );
};

export default AuthPage;
