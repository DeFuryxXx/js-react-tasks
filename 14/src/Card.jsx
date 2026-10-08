import React from 'react';

// BEGIN (write your solution here)
const Card = ({ children }) => (
  <div className="card">{children}</div>
);

const CardBody = ({ children }) => (
  <div className="card-body">{children}</div>
);

const CardTitle = ({ children }) => (
  <h4 className="card-title">{children}</h4>
);

const CardText = ({ children }) => (
  <p className="card-text">{children}</p>
);

Card.Body = CardBody;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;
// END
