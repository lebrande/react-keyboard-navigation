import React, { useState, useRef, FC, ReactNode } from 'react';
import './Field.css';
import { useFocusOutside } from '../../hooks/useFocusOutside';

type Props = {
  label: string;
  renderDropdown?: () => ReactNode;
}

const Field: FC<Props> = ({
  label,
  renderDropdown,
}) => {
  const controlRef = useRef<HTMLDivElement>(null);
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