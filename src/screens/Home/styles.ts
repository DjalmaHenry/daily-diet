import styled from "styled-components/native";
import { UserCircle } from "phosphor-react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 24px;
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 80px;
    height: 40px;
`;

export const UserIcon = styled(UserCircle).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_400,
    size: 46
}))``;