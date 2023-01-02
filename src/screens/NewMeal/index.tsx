import Input from "@components/Input";
import React from "react";
import { useState } from "react";
import * as S from "./styles";

export default function NewMeal() {
  // state to onDiet with options 'yes' or 'no'
  type DietStatus = "yes" | "no" | "none";
  const [onDiet, setOnDiet] = useState<DietStatus>("none");

  return (
    <S.Container>
      <S.Header>
        <S.BackButton>
          <S.BackButtonIcon />
        </S.BackButton>
        <S.Title>Nova Refeição</S.Title>
      </S.Header>
      <S.Body>
        <Input label="Nome" />
        <Input label="Descrição" height={150} multiline />
        <S.TimeContainer>
          <Input label="Data" width={48} keyboardType="number-pad" />
          <Input label="Hora" width={48} keyboardType="number-pad" />
        </S.TimeContainer>
        <S.QuestionContainer>
          <S.Label>Está dentro da dieta?</S.Label>
          <S.OptionsContainer>
            <S.Option
              color="green"
              response={onDiet}
              onPress={() => setOnDiet("yes")}
            >
              <S.OptionStatusColor color="green"></S.OptionStatusColor>
              <S.OptionText>Sim</S.OptionText>
            </S.Option>
            <S.Option
              color="red"
              response={onDiet}
              onPress={() => setOnDiet("no")}
            >
              <S.OptionStatusColor color="red"></S.OptionStatusColor>
              <S.OptionText>Não</S.OptionText>
            </S.Option>
          </S.OptionsContainer>
        </S.QuestionContainer>
      </S.Body>
    </S.Container>
  );
}
