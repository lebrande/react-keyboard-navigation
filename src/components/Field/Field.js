import React from 'react';

const Field = ({
  label,
}) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type="text" />
      </div>
    </div>
  );
};

export default Field;