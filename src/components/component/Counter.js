import { connect } from 'react-redux';
import actions from '../../redux/counter/counter-actions';

function Counter({ step, value, onIncrement, onDecrement }) {
  return (
    <div
      style={{
        margin: '20px 40px',
        padding: '5px',
        borderRadius: '10px',
        textAlign: 'center',
        width: '250px',
        border: '1px solid black',
      }}
    >
      <h2>{value}</h2>
      <button onClick={() => onIncrement(step)} name="increment">
        Increment by {step}
      </button>
      <button onClick={() => onDecrement(step)} name="decrement">
        Decrement by {step}
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
