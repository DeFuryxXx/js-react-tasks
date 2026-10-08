import React from 'react';

// BEGIN (write your solution here)
const Item = ({ task, onToggle }) => {
  const { id, text, state } = task;

  const content = (
    <a href="#" className="todo-task" onClick={(e) => {
      e.preventDefault();
      onToggle(id);
    }}>
      {text}
    </a>
  );

  return (
    <div className="row">
      <div className="col-1">{id}</div>
      <div className="col">
        {state === 'finished' ? <s>{content}</s> : content}
      </div>
    </div>
  );
};

export default Item;
// END
