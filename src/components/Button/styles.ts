import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = "primary" | "secondary";

type Props = {
    type: ButtonTypeStyleProps;
};

//button container
export const Container = styled(TouchableOpacity) <Props>`
    width: 100%;
    height: 56px;
    background-color: ${({ theme, type }) => type === "primary" ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
    border: 1px solid ${({ theme, type }) => type === "primary" ? theme.COLORS.WHITE : theme.COLORS.GRAY_600};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

//button text
export const Title = styled.Text <Props>`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme, type }) => type === "primary" ? theme.COLORS.WHITE : theme.COLORS.GRAY_600};
`;