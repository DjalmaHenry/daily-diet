import { TouchableOpacityProps } from "react-native";
import theme from "../../theme";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  time: string;
  insideDiet: boolean;
};

export default function MealCard({ title, time, insideDiet, ...rest }: Props) {
  const color = insideDiet ? "green" : "red";
  const dietStatusColor =
    color === "green" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID;
  return (
    <S.Container {...rest}>
      <S.InfoCard>
        <S.TimeContainer>
          <S.Time>{time}</S.Time>
        </S.TimeContainer>
        <S.Title>{title}</S.Title>
      </S.InfoCard>
      <S.InsideDiet style={{ backgroundColor: dietStatusColor }}></S.InsideDiet>
    </S.Container>
  );
}
