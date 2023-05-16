import { useContext } from 'react';
import { RatingContext } from '../../contexts/Rating';
import { ResultContainer } from './styles';

export default function SelectedRate() {
  const { rate } = useContext(RatingContext);

  if (!rate) {
    return null;
  }

  return (
    <ResultContainer>
      Your rate: {rate}
    </ResultContainer>
  );
}
