import React from 'react';
import './Field.css';

const Field = ({
  label,
  renderDropdown,
}) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type="text" />
        {renderDropdown && (
          <div className="Field__dropdown">
            {renderDropdown()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Field;