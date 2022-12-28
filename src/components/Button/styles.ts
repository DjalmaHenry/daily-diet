import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

//button container
export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

//button text
export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;