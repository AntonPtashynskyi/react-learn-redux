// import { useState } from 'react';
import { connect } from 'react-redux';
import todoActions from 'redux/todo/todo-actions';
import ListToDo from './ListTodo';
import Filter from './Filter';

const ToDo = ({ onSubmit }) => {
  //   const [showModal, setShowModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const value = form.input.value;

    onSubmit(value);
    form.reset();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="input" />
        <button type="submit"> Add todo</button>
      </form>

      <Filter />
      <ListToDo />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return { onSubmit: text => dispatch(todoActions.addTodo(text)) };
};

export default connect(null, mapDispatchToProps)(ToDo);
