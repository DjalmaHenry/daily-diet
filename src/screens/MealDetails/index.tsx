import React from "react";
import * as S from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealProps } from "@screens/Home";
import Button from "@components/Button";

export default function MealDetails() {
  const navigation = useNavigation();
  const route = useRoute();

  type RouteParams = {
    meal: MealProps;
  };

  const { meal } = route.params as RouteParams;

  function handleBackPage() {
    navigation.goBack();
  }

  return (
    <S.Container diet={meal.insideDiet}>
      <S.Header diet={meal.insideDiet}>
        <S.BackButton onPress={handleBackPage}>
          <S.BackButtonIcon />
        </S.BackButton>
        <S.Title>Refeição</S.Title>
      </S.Header>
      <S.Body>
        <S.Name>{meal.name}</S.Name>
        <S.Description>{meal.description}</S.Description>
        <S.TimeTitle>Data e hora</S.TimeTitle>
        <S.Time>
          {meal.date} às {meal.time}
        </S.Time>
        {meal.insideDiet === "yes" ? (
          <S.DietStatusContainer>
            <S.DietStatusColor diet={meal.insideDiet}></S.DietStatusColor>
            <S.DietStatusText>dentro da dieta</S.DietStatusText>
          </S.DietStatusContainer>
        ) : (
          <S.DietStatusContainer>
            <S.DietStatusColor diet={meal.insideDiet}></S.DietStatusColor>
            <S.DietStatusText>fora da dieta</S.DietStatusText>
          </S.DietStatusContainer>
        )}
        <S.ActionsContainer>
          <Button
            title="Editar Refeição"
            icon="create"
            style={{
              marginBottom: 8,
            }}
          />
          <Button title="Excluir Refeição" icon="delete" type="secondary" />
        </S.ActionsContainer>
      </S.Body>
    </S.Container>
  );
}
