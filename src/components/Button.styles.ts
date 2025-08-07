import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'neutral';
interface ButtonContainerProps {
    variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width:100px;
    height: 40px;
    border-radius: 4px;
    margin: 8px;
    border: 0;
    
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};

`;