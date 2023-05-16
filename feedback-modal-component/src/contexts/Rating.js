import PropTypes from 'prop-types';
import { createContext, useMemo, useState } from 'react';

const RatingContext = createContext();

function RatingProvider({ children }) {
  const [rate, setRate] = useState(null);

  const updateRate = (newRate) => {
    setRate(newRate);
  };

  const memoRate = useMemo(() => ({
    rate,
    updateRate,
  }), [rate]);

  return (
    <RatingContext.Provider value={memoRate}>
      {children}
    </RatingContext.Provider>
  );
}

export { RatingContext, RatingProvider };

RatingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
