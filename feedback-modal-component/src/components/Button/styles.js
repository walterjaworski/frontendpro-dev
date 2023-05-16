import { css, styled } from 'styled-components';

export const CustomButton = styled.button`
  height: 52px;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  font-size: 14px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray[200]} !important;
    cursor: default;
  }

  ${({ theme, outline }) => outline && css`
    background: transparent;
    border: 1px solid ${theme.colors.primary.main};

    &:hover {
      background: ${theme.colors.backgroundDark};
      border-color: ${theme.colors.primary.light};
    }

    &:active {
      background: ${theme.colors.primary.main};
      border-color: ${theme.colors.primary.dark};
    }
  `}

  ${({ theme, rating }) => rating && css`
    width: 48px;
    height: 48px;
    background: ${theme.colors.backgroundDark};
    border-radius: 10px;
    border: 1px solid ${theme.colors.primary.darker};

    &:hover {
      background: ${theme.colors.primary.light};
      border-color: '#fff';
    }

    &:active {
      background: ${theme.colors.primary.main};
      border-color: ${theme.colors.primary.main};
    }
  `}
`;
