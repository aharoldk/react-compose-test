import React from 'react';
import './Card.css';
import {compose, withHandlers, withState} from "recompose";

export const Card = ({opened, handleClick, name, picture, description }) => {
  return (
    <div className={opened ? "card open" : "card closed"}>
      <div
        id="header-card"
        className="header"
        onClick={() => handleClick()}
      >
        {name}
      </div>
      <div className="body">
        <img id="img-card" src={picture} alt={name} />
        <p id="description-card">{description}</p>
      </div>
    </div>
  );
};

const enhance = compose(
  withState('opened', 'toggleOpened', false),
  withHandlers({
    handleClick: props => event => {
      props.toggleOpened(!props.opened)
    }
  })
);

export default enhance(Card);
