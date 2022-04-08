import { connect } from 'react-redux';
import actions from '../../redux/todo/todo-actions';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Filter todos!
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.todos.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
