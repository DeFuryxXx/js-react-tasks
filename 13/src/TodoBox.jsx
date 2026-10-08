import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
const TodoBox = () => {
  const [text, setText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }
    const newTask = { id: uniqueId(), text: trimmed };
    setTasks((prev) => [newTask, ...prev]);
    setText('');
  };

  const handleRemove = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="mb-3">
        <form className="d-flex" onSubmit={handleSubmit}>
          <div className="me-3">
            <input
              type="text"
              value={text}
              required
              className="form-control"
              placeholder="I am going..."
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">add</button>
        </form>
      </div>
      {tasks.map((task) => (
        <Item key={task.id} task={task} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default TodoBox;
// END
