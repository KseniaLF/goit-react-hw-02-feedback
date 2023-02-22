import PropTypes from 'prop-types';

import { FeedbackButtons } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onLeaveFeedback: { handleGood, handleNeutral, handleBad },
}) => {
  return (
    <FeedbackButtons>
      <button onClick={handleGood}>Good</button>

      <button onClick={handleNeutral}>Neutral</button>

      <button onClick={handleBad}>Bad</button>
    </FeedbackButtons>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.shape({
    handleGood: PropTypes.func.isRequired,
    handleNeutral: PropTypes.func.isRequired,
    handleBad: PropTypes.func.isRequired,
  }),
};
