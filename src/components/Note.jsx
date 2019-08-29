import React from "react";
import { render } from "react-dom";

const Note = ({ id, label, value, required = false }) => (
  <div className="note">
    <label htmlFor={id}>{label}</label>
    <textarea name={id} id={id}>
      {value}
    </textarea>
  </div>
);

export default Note;
