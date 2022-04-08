import { connect } from 'react-redux';
import '../../index.css';

const Stats = ({ total, totalCompleted }) => {
  return (
    <div className="container">
      <p>Total TODO's: {total}</p>
      <p>Done todos: {totalCompleted}</p>
    </div>
  );
};

const totalTodo = array =>
  array.reduce((total, todo) => {
    return todo.completed ? total + 1 : total;
  }, 0);

const mapStateToProps = state => ({
  total: state.todos.items.length,
  totalCompleted: totalTodo(state.todos.items),
});

export default connect(mapStateToProps)(Stats);
