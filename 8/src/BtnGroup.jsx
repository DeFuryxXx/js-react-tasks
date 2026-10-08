import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const BtnGroup = () => {
  const [active, setActive] = React.useState(null);

  return (
    <div className="btn-group" role="group">
      <button
        type="button"
        className={cn('btn', 'btn-secondary', 'left', { active: active === 'left' })}
        onClick={() => setActive('left')}
      >
        Left
      </button>
      <button
        type="button"
        className={cn('btn', 'btn-secondary', 'right', { active: active === 'right' })}
        onClick={() => setActive('right')}
      >
        Right
      </button>
    </div>
  );
};

export default BtnGroup;
// END
