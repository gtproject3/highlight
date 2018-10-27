import React from 'react';
import './List.css';

const List = (props) => (
  <a href={"/books/" + props.title}>
    <strong>
      {props.title} by {props.name}
    </strong>
  </a>


)

module.exports = List




