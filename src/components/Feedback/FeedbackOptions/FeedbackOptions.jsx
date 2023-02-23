import PropTypes from 'prop-types';

import { FeedbackButtons } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <FeedbackButtons>
      <button onClick={() => onLeaveFeedback('good')}>Good</button>

      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>

      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
    </FeedbackButtons>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
