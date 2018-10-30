import React from 'react';

const InputBox = props => (
  <input type={props.type || "text"} className="uk-input" name={props.name} value={props.value} onChange={props.onChange} />
);

export default InputBox;