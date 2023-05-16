import { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container, Content } from './styles';

import Button from '../Button';
import Modal from '../Modal';

export default function App() {
  const [selectedRate] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        {selectedRate !== null && (
          <Content>
            abc
          </Content>
        )}
        <Button onClick={handleOpenModal}>
          Open modal
        </Button>
        {openModal && (
          <Modal onClose={handleCloseModal}>
            modal home
          </Modal>
        )}
      </Container>
    </ThemeProvider>
  );
}
