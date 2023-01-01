import { TouchableOpacityProps } from "react-native";
import theme from "../../theme";
import * as S from "./styles";
import { ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
};

export default function Highlight({ title, type = 'primary', ...rest }: Props) {
    return (
        <S.Container type={type} {...rest}>
            <S.Title type={type}>{title}</S.Title>
        </S.Container>
    );
}