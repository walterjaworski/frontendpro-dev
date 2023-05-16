import PropTypes from 'prop-types';
import {
  Container,
  Footer,
  Header,
  Main,
  Overlay,
} from './styles';
import Button from '../Button';

export default function Modal({ onClose }) {
  const ratingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handleCloseModal() {
    onClose();
  }

  return (
    <Overlay>
      <Container>
        <Header>
          <h1>How likely are you to recommend FrontendPro to someone you know?</h1>
        </Header>
        <Main>
          <div className="rating">
            {ratingOptions.map((item) => (
              <Button key={item} rating>
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
          <Button>
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
