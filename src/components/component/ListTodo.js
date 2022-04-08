import { connect } from 'react-redux';
import actions from '../../redux/todo/todo-actions';
import '../../index.css';

const ListToDo = ({ todos, onDeleteTodo, onCompleteTodo, completed }) => {
  const handleChange = e => {
    return console.log(e.target.checked);
  };

  return (
    <div>
      <h3>Things to do</h3>
      <ul>
        {todos.map(({ id, text }) => (
          <li key={id} className="list-item">
            <input
              className="input"
              type="checkbox"
              onChange={handleChange}
              onClick={() => onCompleteTodo(id)}
            />
            <span className="text">{text}</span>
            <button className="button" onClick={() => onDeleteTodo(id)}>
              DEL
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getVisibleTodo = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ todos: { items, filter } }) => ({
  todos: getVisibleTodo(items, filter),
  // completed: items.map(i => i.completed)[0],
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(actions.deleteTodo(id)),
  onCompleteTodo: id => dispatch(actions.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListToDo);

// const mapStateToProps = state => {
//   const { filter, items } = state.todos;
//   const visibleTodo = getVisibleTodo(items, filter);

//   return {
//     todos: visibleTodo,
//   };
// };
