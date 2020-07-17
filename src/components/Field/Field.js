import React, { useState, useRef } from 'react';
import './Field.css';
import { useFocusOutside } from '../../hooks/useFocusOutside';

const Field = ({
  label,
  renderDropdown,
}) => {
  const controlRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useFocusOutside(controlRef, () => {
    setIsOpen(false)
  });

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control" ref={controlRef}>
        <input
          className="input"
          type="text"
          onFocus={() => {
            setIsOpen(true);
          }}
        />
        {!!renderDropdown && isOpen && (
          <div className="Field__dropdown">
            {renderDropdown()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Field;