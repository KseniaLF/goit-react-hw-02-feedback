export const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button
        onClick={onIncrement}
        style={{ fontSize: 40, backgroundColor: 'red' }}
      >
        +
      </button>
      <button
        onClick={onDecrement}
        style={{ fontSize: 40, backgroundColor: 'red' }}
      >
        -
      </button>
    </div>
  );
};
