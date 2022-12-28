import React from "react";
import { useState } from "react";
import * as S from "./styles";
import LogoImg from "@assets/logo.png";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import { FlatList } from "react-native";

type MealProps = {
  name: string;
  description: string;
  date: string;
  time: string;
  insideDiet: boolean;
};

export default function Home() {
  const [meals, setMeals] = useState<MealProps[]>([
    {
      name: "Café da manhã",
      description: "Pão, leite, café",
      date: "10/10/2020",
      time: "08:00",
      insideDiet: true,
    },
  ]);
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
