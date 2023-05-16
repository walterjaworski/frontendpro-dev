import { styled } from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  /* max-width: 820px; */
  max-width: 660px;
  padding: 32px 24px;
  background: ${({ theme }) => theme.colors.modalBackground};
  color: #fff;
  border-radius: 20px;
  position: relative;
`;

export const Header = styled.header`
  h1 {
    font-family: 'Merriweather', serif;
    font-size: 24px;
    text-align: center;
  }
`;

export const Main = styled.main`
  margin: 40px 0;

  .rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
  }

  .labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  color: #fff;
  font-family: 'Inter', serif;
`;
