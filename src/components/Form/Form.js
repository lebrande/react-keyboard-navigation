import React from "react";

const Form = () => {
  return (
    <form>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>
    </form>
  );
};

export default Form;
