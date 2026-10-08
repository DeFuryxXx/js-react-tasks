import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Alert = ({ type, text }) => {
  const className = cn('alert', `alert-${type}`);

  return (
    <div className={className} role="alert">
      {text}
    </div>
  );
};

export default Alert;
// END
