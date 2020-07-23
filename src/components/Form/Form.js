import React from 'react';
import Field from '../Field/Field';
import Submit from '../Submit/Submit';
import DatePicker from '../DatePicker/DatePicker';
import { useSpatialNavigation } from '../../hooks/useSpatialNavigation';

const Form = () => {
  useSpatialNavigation('#form input, #form button');

  return (
    <form id="form">
      <Field label="Name" />
      <Field label="Email" />
      <Submit />
    </form>
  );
};

export default Form;
