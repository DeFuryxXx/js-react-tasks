import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
const Collapse = ({ text, opened = true }) => {
  const [isOpened, setIsOpened] = React.useState(opened);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpened((value) => !value);
  };

  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#"
          role="button"
          aria-expanded={isOpened}
          onClick={handleClick}
        >
          Link with href
        </a>
      </p>
      <div className={cn('collapse', { show: isOpened })}>
        <div className="card card-body">{text}</div>
      </div>
    </div>
  );
};

export default Collapse;
// END
