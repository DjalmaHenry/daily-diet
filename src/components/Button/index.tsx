import { TouchableOpacityProps } from "react-native";
import theme from "../../theme";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
};

export default function Highlight({ title, ...rest }: Props) {
    return (
        <S.Container {...rest}>
            <S.Title>{title}</S.Title>
        </S.Container>
    );
}