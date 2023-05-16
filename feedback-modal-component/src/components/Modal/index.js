import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { RatingContext } from '../../contexts/Rating';

import {
  CloseButton,
  Container,
  Footer,
  Header,
  Main,
  Overlay,
} from './styles';
import Button from '../Button';

export default function Modal({ onClose }) {
  const { updateRate } = useContext(RatingContext);
  const [newRate, setNewRate] = useState(null);
  const ratingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handleCloseModal() {
    onClose();
    updateRate(null);
  }

  function handleSubmit() {
    if (newRate !== null) {
      updateRate(newRate);
    }
    onClose();
  }

  function handleRate(value) {
    setNewRate(value);
  }

  return (
    <Overlay>
      <Container>
        <CloseButton onClick={handleCloseModal}>
          X
        </CloseButton>
        <Header>
          <h1>How likely are you to recommend FrontendPro to someone you know?</h1>
        </Header>
        <Main>
          <div className="rating">
            {ratingOptions.map((item) => (
              <Button key={item} rating onClick={() => handleRate(item)}>
                {item}
              </Button>
            ))}
          </div>
          <div className="labels">
            <span>Not liked at all</span>
            <span>Extremely Likely</span>
          </div>
        </Main>
        <Footer>
          <Button outline onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            Submit
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
