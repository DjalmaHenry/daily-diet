import React from "react";
import { useState, useCallback } from "react";
import * as S from "./styles";
import LogoImg from "@assets/logo.png";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import { FlatList } from "react-native";
import MealCard from "@components/MealCard";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { mealsGetAll } from "@storage/meal/mealsGetAll";

export type DietProps = "yes" | "no";

export type MealProps = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  insideDiet: DietProps;
};

type MealListProps = {
  meals: MealProps[];
  date: string;
};

export default function Home() {
  const navigation = useNavigation();
  const [meals, setMeals] = useState<MealProps[]>([]);

  // join meals of the same date
  const mealsList = meals.reduce((acc: MealListProps[], meal) => {
    const lastMeal = acc[acc.length - 1];
    if (lastMeal && lastMeal.date === meal.date) {
      lastMeal.meals.push(meal);
    } else {
      acc.push({ date: meal.date, meals: [meal] });
    }
    acc.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    return acc;
  }, []);

  function handleNewMeal() {
    navigation.navigate("NewMeal");
  }

  async function fetchMeals() {
    try {
      const data = await mealsGetAll();
      setMeals(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Logo source={LogoImg} />
        <S.UserIcon />
      </S.HeaderContainer>
      <Highlight percentage={70} />
      <S.TitleMeals>Refeições</S.TitleMeals>
      <Button title="Nova Refeição" icon="add" onPress={handleNewMeal} />

      {/* custom flatlist with separate content per date with mealsList */}
      <FlatList
        style={{ marginTop: 8 }}
        data={mealsList}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <>
            <S.DateMeal>{item.date}</S.DateMeal>
            <FlatList
              data={item.meals}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <MealCard
                  title={item.name}
                  time={item.time}
                  insideDiet={item.insideDiet}
                  onPress={() =>
                    navigation.navigate("MealDetails", { meal: item })
                  }
                />
              )}
            />
          </>
        )}
        ListEmptyComponent={
          <S.EmptyContainer>
            <S.EmptyText>Cadastre agora sua primeira refeição!</S.EmptyText>
            <S.EmptyText>É rápido e fácil!</S.EmptyText>
            <S.EmptyText>😉</S.EmptyText>
          </S.EmptyContainer>
        }
      />
    </S.Container>
  );
}
