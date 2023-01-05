import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealProps } from "@screens/Home";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealCreate(newMeal: MealProps) {
    try {
        const storedMeals = await mealsGetAll();

        const storage = JSON.stringify([...storedMeals, newMeal]);

        await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}