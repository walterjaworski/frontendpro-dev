import { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { RatingProvider } from '../../contexts/Rating';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';

import Button from '../Button';
import Modal from '../Modal';
import SelectedRate from '../SelectedRate';

export default function App() {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <RatingProvider>
        <GlobalStyles />
        <Container>
          <SelectedRate />
          <Button onClick={handleOpenModal}>
            Open modal
          </Button>
          {openModal && (
            <Modal onClose={handleCloseModal}>
              modal home
            </Modal>
          )}
        </Container>
      </RatingProvider>
    </ThemeProvider>
  );
}
