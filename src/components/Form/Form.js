import React from 'react';
import Field from '../Field/Field';
import Submit from '../Submit/Submit';

const Form = () => {
  return (
    <form>
      <Field label="Name" />
      <Field label="Email" />
      <Field label="Phone number" />
      <Field label="Delivery address" />
      <Field label="Delivery date" />
      <Field label="Notes" />
      <Submit />
    </form>
  );
};

export default Form;
