import React from "react";
import * as S from "./styles";
import LogoImg from "@assets/logo.png";

export default function Home() {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Logo source={LogoImg} />
        <S.UserIcon />
      </S.HeaderContainer>
    </S.Container>
  );
}
