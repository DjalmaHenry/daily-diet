import React from "react";
import * as S from "./styles";
import LogoImg from "@assets/logo.png";
import Highlight from "@components/Highlight";
import Button from "@components/Button";

export default function Home() {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Logo source={LogoImg} />
        <S.UserIcon />
      </S.HeaderContainer>
      <Highlight percentage={70} />
      <S.TitleMeals>Refeições</S.TitleMeals>
      <Button title="Nova Refeição" />
    </S.Container>
  );
}
