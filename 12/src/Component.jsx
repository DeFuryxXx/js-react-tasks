import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
const Counter = () => {
  const [log, setLog] = React.useState([]);

  const handleIncrement = () => {
    setLog((prev) => {
      const last = get(prev, [0, 'value'], 0);
      return [{ id: uniqueId(), value: last + 1 }, ...prev];
    });
  };

  const handleDecrement = () => {
    setLog((prev) => {
      const last = get(prev, [0, 'value'], 0);
      return [{ id: uniqueId(), value: last - 1 }, ...prev];
    });
  };

  const handleRemove = (id) => {
    setLog((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="btn-group font-monospace" role="group">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
      {log.length > 0 && (
        <div className="list-group">
          {log.map(({ id, value }) => (
            <button
              key={id}
              type="button"
              className="list-group-item list-group-item-action"
              onClick={() => handleRemove(id)}
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Counter;
// END
